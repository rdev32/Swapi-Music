import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { spotify } from '../../assets/spotify'
import Header from '../../components/playlist/components/header'
import Songs from '../../components/Spotify/LikedSong/Songs'
import validPid from '../../helpers/pages/artist/ValidPid'
import GetData from '../../hooks/GetData/GetData'
import { GetPlaylistId } from '../../hooks/types/GetPlayListId'
import useActiveOptContext from '../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../styles/general/styles'

const Playlist: NextPage = () => {
    const router = useRouter()
    const asPath = router.asPath
    const { setActive } = useContext(useActiveOptContext)
    useEffect(() => {
        asPath && setActive(asPath)
    }, [asPath])

    const { pid } = router.query
    const url = `${spotify}v1/playlists/${pid}`
    const data = GetData<GetPlaylistId>(validPid(url, pid))
    const [tracks, setTracks] = useState<any>([])
    useEffect(() => {
        setTracks(data?.tracks?.items)
    }, [data.tracks])

    const orderArtists =
        data?.tracks?.items &&
        [...data?.tracks?.items]?.sort((a, b) => {
            if (a.track.artists[0].name < b.track.artists[0].name) {
                return -1
            }
            if (a.track.artists[0].name > b.track.artists[0].name) {
                return 1
            }
            return 0
        })

    const orderTitles =
        data?.tracks?.items &&
        [...data?.tracks?.items]?.sort((a, b) => {
            if (a.track.name < b.track.name) {
                return -1
            }
            if (a.track.name > b.track.name) {
                return 1
            }
            return 0
        })

    const orderAlbums =
        data?.tracks?.items &&
        [...data?.tracks?.items]?.sort((a, b) => {
            if (a.track.album.name < b.track.album.name) {
                return -1
            }
            if (b.track.album.name > b.track.album.name) {
                return 1
            }
            return 0
        })
    const orderDate =
        data?.tracks?.items &&
        [...data?.tracks?.items]?.sort((a, b) => {
            if (a.added_at < b.added_at) {
                return -1
            }
            if (a.added_at > b.added_at) {
                return 1
            }
            return 0
        })

    const orderDuration =
        data?.tracks?.items &&
        [...data?.tracks?.items]?.sort((a, b) => {
            if (a.track.duration_ms < b.track.duration_ms) {
                return -1
            }
            if (a.track.duration_ms > b.track.duration_ms) {
                return 1
            }

            return 0
        })

    return (
        <S.StyledContainer>
            <Header data={data} />
            <select
                name="tracks"
                id="tracks"
                onChange={(event: { target: { value: string } }) => {
                    if (event.target.value === 'DEFAULT') {
                        setTracks(data?.tracks?.items)
                    } else {
                        setTracks(JSON.parse(event.target.value))
                    }
                }}
                defaultValue="DEFAULT"
            >
                <option value="DEFAULT">Custom Order</option>
                <option value={JSON.stringify(orderTitles)}>Title</option>
                <option value={JSON.stringify(orderArtists)}>Artist</option>
                <option value={JSON.stringify(orderAlbums)}>Album</option>
                <option value={JSON.stringify(orderDate)}>Date added</option>
                <option value={JSON.stringify(orderDuration)}>Duration</option>
            </select>
            <hr />
            <Songs
                data={tracks}
                name={data.name}
                id={data.id}
                type={data.type}
            />
        </S.StyledContainer>
    )
}

export default Playlist
