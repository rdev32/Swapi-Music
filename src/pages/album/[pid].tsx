import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Song from '../../components/Spotify/Album/components/Songs/Song'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import GetData from '../../hooks/GetData/GetData'
import GetTimeSongs from '../../hooks/GetTimeSongs/GetTimeSongs'
import { Album } from '../../hooks/types/GetAlbum'
import * as SMSong from '../../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../../styles/pages/album/album.style'
import * as SPlaylist from '../../styles/components/playlist/header.style'
import Link from 'next/link'
import AlbumArtist from '../../components/Albums/AlbumsArtist'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import { useContext } from 'react'

const Album: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query
    const { setTracks } = useContext(UserTrackContext)
    const urlAlbumsTracks = pid
        ? `https://api.spotify.com/v1/albums/${pid}`
        : ''
    const {
        images,
        name,
        artists,
        tracks,
        type,
        id: idFrom,
    } = GetData<Album>(urlAlbumsTracks)
    const ms = tracks?.items?.reduce(
        (acc, curr) => (acc = acc + curr.duration_ms),
        0
    )

    const [hour, minutes, seconds] = GetTimeSongs({ ms: ms })

    const newTracks = tracks?.items?.map((item, index) => {
        return {
            id: item.id,
            position: index,
            trackname: item.name,
            artist: item.artists,
            album: {
                id: idFrom,
                name,
                type,
            },
            duration_ms: item.duration_ms,
            images: images[2]?.url,
        }
    })
    const handlePlayId = (id: number) => {
        setTracks({
            tracks: newTracks,
            position: id,
            from: {
                name,
                id: idFrom,
                type,
            },
        })
    }
    return (
        <S.AlbumStyle>
            <S.AlbumHeader>
                <div>
                    <UserImage
                        key={images && images[0]?.url}
                        url={images && images[0]?.url}
                        bradius={10}
                        size={220}
                    />
                </div>
                <S.AlbumContent>
                    <h5>{type?.toUpperCase()}</h5>
                    <h1>{name}</h1>
                    <SPlaylist.PlaylistHeaderDetails>
                        <Link
                            href={{
                                pathname: '/artist/[pid]',
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
                                        ? `${minutes} Min ${Math.round(
                                              seconds
                                          )} Sec`
                                        : ''}
                                </>
                            ) : (
                                ''
                            )}
                        </p>
                    </SPlaylist.PlaylistHeaderDetails>
                </S.AlbumContent>
            </S.AlbumHeader>
            <S.AlbumAside>
                {tracks?.items?.map((song, index) => (
                    <SMSong.SongCard key={song.id}>
                        <Song
                            song={song}
                            index={index}
                            handleId={() => handlePlayId(index)}
                        />
                    </SMSong.SongCard>
                ))}
            </S.AlbumAside>
            <AlbumArtist artists={artists} />
        </S.AlbumStyle>
    )
}

export default Album
