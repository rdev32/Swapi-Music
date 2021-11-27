import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'
import Song from '../../components/Spotify/Album/components/Songs/Song'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import GetData from '../../hooks/GetData/GetData'
import { Album } from '../../hooks/types/GetAlbum'
import * as SSong from '../../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../../styles/pages/album/album.style'

const Album: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `https://api.spotify.com/v1/albums/${pid}` : ''
    const { images, name, artists, tracks, type } = GetData<Album>(url)
    const [[hour, minutes, seconds], setDuration] = useState<number[]>([])

    useLayoutEffect(() => {
        const ms = tracks?.items?.reduce(
            (acc, curr) => (acc = acc + curr.duration_ms),
            0
        )
        const hour = Math.floor(ms / 3600000)
        const minutes = Math.floor(ms / 60000) - hour * 60
        const seconds = (ms % 60000) / 1000
        setDuration([hour, minutes, seconds])
    }, [tracks?.items])

    return (
        <S.AlbumStyle>
            <UserImage
                key={images && images[0]?.url}
                url={images && images[0]?.url}
                bradius={10}
                size={220}
            />
            <h5>{type?.toUpperCase()}</h5>
            <h1>{name}</h1>
            {artists?.map((artist) => (
                <h4 key={artist.id}>{artists[0].name}</h4>
            ))}
            <p>
                {tracks?.total > 0 ? (
                    <>
                        {tracks?.total} Songs,{' '}
                        {hour ? `${hour} Hrs ${minutes}Min` : ''}{' '}
                        {!hour
                            ? `${minutes} Min ${Math.round(seconds)} Sec`
                            : ''}
                    </>
                ) : (
                    ''
                )}
            </p>
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
