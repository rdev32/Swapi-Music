import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { spotify } from '../../assets/spotify'
import Header from '../../components/playlist/components/header'
import Songs from '../../components/Spotify/LikedSong/Songs'
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
    const url = pid ? `${spotify}v1/playlists/${pid}` : ''
    const data = GetData<GetPlaylistId>(url)

    return (
        <S.StyledContainer>
            <Header data={data} />
            <Songs
                data={data.tracks?.items}
                name={data.name}
                id={data.id}
                type={data.type}
            />
        </S.StyledContainer>
    )
}

export default Playlist
