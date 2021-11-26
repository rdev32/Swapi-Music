import { useRouter } from 'next/router'
import { FC, useLayoutEffect, useState } from 'react'
import Song from '../../components/Spotify/Album/components/Songs/Song'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import GetData from '../../hooks/GetData/GetData'
import { Album } from '../../hooks/types/GetAlbum'
import * as SSong from '../../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../../styles/pages/album/album.style'

interface IProps {}

const Album: FC<IProps> = (props) => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `https://api.spotify.com/v1/albums/${pid}` : ''

    const { images, name, artists, release_date, tracks } = GetData<Album>(url)

    const [duration, setDuration] = useState('')

    useLayoutEffect(() => {
        const ms = tracks?.items?.reduce(
            (acc, curr) => (acc = acc + curr.duration_ms),
            0
        )
        const minutes = Math.floor(ms / 60000)
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        setDuration(`${minutes} Minutes ${seconds} Sec`)
    }, [tracks?.items])

    return (
        <S.AlbumStyle>
            {images && (
                <UserImage
                    key={images[0]?.url}
                    url={images[0].url}
                    bradius={10}
                    size={200}
                />
            )}

            <h1>{name}</h1>
            {artists?.map((artist) => (
                <h4 key={artist.id}>{artists[0].name}</h4>
            ))}
            <h4>
                {release_date?.slice(0, 4)} • {tracks?.total} Songs,{' '}
                {duration ? duration : '0'}
            </h4>
            <div>
                {tracks?.items?.map((song, index) => (
                    <SSong.SongCard key={song.id}>
                        <SSong.SongNumber>{index + 1}</SSong.SongNumber>
                        <Song song={song} />
                    </SSong.SongCard>
                ))}
            </div>
        </S.AlbumStyle>
    )
}

export default Album
