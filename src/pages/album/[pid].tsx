import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Song from '../../components/Spotify/Album/components/Songs/Song'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import GetData from '../../hooks/GetData/GetData'
import GetTimeSongs from '../../hooks/GetTimeSongs/GetTimeSongs'
import { Album } from '../../hooks/types/GetAlbum'
import * as SSong from '../../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../../styles/pages/album/album.style'
import * as SPlaylist from '../../styles/components/playlist/header.style'
import Link from 'next/link'
const Album: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `https://api.spotify.com/v1/albums/${pid}` : ''
    const { images, name, artists, tracks, type } = GetData<Album>(url)

    const ms = tracks?.items?.reduce(
        (acc, curr) => (acc = acc + curr.duration_ms),
        0
    )

    const [hour, minutes, seconds] = GetTimeSongs({ ms: ms })

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
            <SPlaylist.PlaylistHeaderDetails>
                <Link
                    href={{
                        pathname: '/users/[pid]',
                        query: { pid: artists && artists[0].id },
                    }}
                    passHref
                >
                    <a>{artists && artists[0].name}</a>
                </Link>
                <p>
                    {tracks?.total > 0 ? (
                        <>
                            <SPlaylist.PlayListSeparator>
                                {' '}
                                •{' '}
                            </SPlaylist.PlayListSeparator>
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
            </SPlaylist.PlaylistHeaderDetails>
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
