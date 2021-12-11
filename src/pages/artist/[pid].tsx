import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import typeSizeCreen from '../../components/Albums/helpers/typeSizeCreen'
import Song from '../../components/Spotify/LikedSong/components/Song'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import GetData from '../../hooks/GetData/GetData'
import { IImages } from '../../hooks/types/GetAlbum'
import { AlbumArtist } from '../../hooks/types/GetArtistAlbum'
import { Artist } from '../../hooks/types/GetFollowedArts'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import useWindowSize from '../../hooks/useWindowSize/useWindowSize'
import * as SSAlbum from '../../styles/components/albums/albums.style'
import * as SSwiper from '../../styles/components/albums/Swiper/SwiperContainer.style'
import * as SPlaylist from '../../styles/pages/library/library.style'
import * as S from '../../styles/pages/User/UserHeader.style'
import * as SSMain from '../../styles/components/Spotify/MainSongs/Main.style'
import { StyledContainer } from '../../styles/general/styles'
import * as SSong from '../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import dynamic from 'next/dynamic'

type Tracks = {
    tracks: {
        album: {
            album_type: string
            artists: Artist[]
            external_urls: {
                spotify: string
            }
            href: string
            id: string
            images: IImages[]
            name: string
            release_date: string
            release_date_precision: string
            total_tracks: number
            type: string
            uri: string
        }
        artists: Artist[]
        available_markets: string[]
        disc_number: number
        duration_ms: number
        explicit: boolean
        external_ids: {
            isrc: string
        }
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        is_local: boolean
        is_playable: boolean
        name: string
        popularity: number
        preview_url: string
        track_number: number
        type: string
        uri: string
    }[]
}

const Artist: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    const urlArtist = pid ? `https://api.spotify.com/v1/artists/${pid}` : ''
    const urlAlbums = pid
        ? `https://api.spotify.com/v1/artists/${pid}/albums`
        : ''
    const urlTopTracks = pid
        ? `https://api.spotify.com/v1/artists/${pid}/top-tracks?market=ES`
        : ''
    const { name, images, followers } = GetData<Artist>(urlArtist)
    const { items } = GetData<AlbumArtist>(urlAlbums)
    const { tracks } = GetData<Tracks>(urlTopTracks)
    const [screenItems, setScreenItems] = useState(7)
    const sizeScreen = useWindowSize()
    const { setTracks } = useContext(UserTrackContext)

    useEffect(() => {
        return setScreenItems(typeSizeCreen(sizeScreen))
    }, [sizeScreen])
    const formatNumber = (numbers: number) => {
        return `${numbers
            ?.toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} Followers`
    }

    const newTracks = tracks?.map((item, index) => {
        return {
            id: item.id,
            position: index,
            trackname: item.name,
            artist: item.artists,
            album: {
                id: item.album.id,
                name: item.album.name,
                type: item.album.type,
            },
            duration_ms: item.duration_ms,
            images: item.album.images[0]?.url,
        }
    })

    const handlePlayId = (id: number) => {
        setTracks({
            tracks: newTracks.filter((track) => track.position === id),
            position: id,
            from: {
                name: tracks[id].album.name,
                id: tracks[id].album.id,
                type: 'album',
            },
        })
    }
    const PlayCenter = useMemo(
        () =>
            dynamic(
                () => import(`../../../public/icons/Player/playcenter.svg`)
            ),
        []
    )
    console.log(tracks)

    return (
        <StyledContainer>
            <S.UserHeaderStyle width="370px">
                <div>
                    {images && (
                        <UserImage
                            key={images[0].url}
                            url={images[0].url || ''}
                            bradius={100}
                            displayName={name}
                            size={200}
                            name="artistout"
                        />
                    )}
                </div>
                <div>
                    <p>Artist</p>
                    <h1>{name}</h1>
                    <p>{formatNumber(followers?.total)}</p>
                </div>
            </S.UserHeaderStyle>
            {tracks && (
                <>
                    <h2>Top tracks</h2>
                    {tracks &&
                        tracks
                            ?.filter((_, index) => index < 5)
                            ?.map((song, index) => (
                                <SSMain.SongCard key={song.id}>
                                    <SSong.Song key={song?.id}>
                                        <SSong.SongMain>
                                            <SSong.SongNumberItem>
                                                <SSMain.SongNumber>
                                                    {index + 1}
                                                </SSMain.SongNumber>
                                                <SSMain.Button
                                                    onClick={() =>
                                                        handlePlayId(index)
                                                    }
                                                >
                                                    <PlayCenter />
                                                </SSMain.Button>
                                            </SSong.SongNumberItem>
                                            {song?.album?.images?.length >
                                                0 && (
                                                <UserImage
                                                    url={
                                                        song?.album?.images[0]
                                                            ?.url
                                                    }
                                                    displayName={
                                                        song.album.name
                                                    }
                                                    size={55}
                                                    bradius={10}
                                                    name="songout"
                                                />
                                            )}
                                            <SSong.SongDescription>
                                                <SSong.SontTitle>
                                                    {song?.name}
                                                </SSong.SontTitle>
                                                <SSong.SongArtists>
                                                    {song?.artists.map(
                                                        (artist, index) => (
                                                            <Link
                                                                key={artist?.id}
                                                                href={{
                                                                    pathname:
                                                                        '/artist/[pid]',
                                                                    query: {
                                                                        pid: artist?.id,
                                                                    },
                                                                }}
                                                                passHref
                                                            >
                                                                <SSong.SongArtist>
                                                                    {index === 0
                                                                        ? ''
                                                                        : `,`}{' '}
                                                                    {
                                                                        artist?.name
                                                                    }
                                                                </SSong.SongArtist>
                                                            </Link>
                                                        )
                                                    )}
                                                </SSong.SongArtists>
                                            </SSong.SongDescription>
                                        </SSong.SongMain>
                                        <SSong.SongTitleAlbum>
                                            <Link
                                                href={{
                                                    pathname: '/album/[pid]',
                                                    query: {
                                                        pid: song?.album?.id,
                                                    },
                                                }}
                                                passHref
                                            >
                                                <a>{song?.album?.name}</a>
                                            </Link>
                                        </SSong.SongTitleAlbum>
                                        <SSong.SongMinutesBox>
                                            {/* <p>
                                                {' '}
                                                {hour
                                                    ? `${hour} ${minutes}`
                                                    : ''}{' '}
                                                {!hour
                                                    ? `${minutes}:${
                                                          seconds?.toFixed(0)
                                                              .length === 1
                                                              ? `0${seconds.toFixed()}`
                                                              : seconds?.toFixed()
                                                      }`
                                                    : ''}
                                            </p> */}
                                        </SSong.SongMinutesBox>
                                    </SSong.Song>
                                </SSMain.SongCard>
                            ))}
                </>
            )}

            {items && (
                <div>
                    <h2>Appears On</h2>
                    <SSwiper.SwiperContainer>
                        <SSwiper.SwiperMain
                            className="mySwiper"
                            modules={[Navigation]}
                            navigation
                            spaceBetween={1}
                            slidesPerView={screenItems}
                        >
                            {items?.map((album) => (
                                <SwiperSlide key={album.id}>
                                    <Link
                                        href={{
                                            pathname: '/album/[pid]',
                                            query: { pid: album?.id },
                                        }}
                                        passHref
                                        key={album.id}
                                    >
                                        <SSAlbum.AlbumRedirect>
                                            {album.images.length > 0 && (
                                                <UserImage
                                                    url={album.images[0].url}
                                                    displayName={album.name}
                                                    size={166}
                                                    bradius={10}
                                                />
                                            )}
                                            <SPlaylist.PlaylistTitle>
                                                {album.name.length > 16
                                                    ? `${album.name
                                                          .slice(0, 16)
                                                          .trim()}...`
                                                    : album.name.slice(0, 16)}
                                            </SPlaylist.PlaylistTitle>
                                            <SPlaylist.PlaylistAuthor>
                                                {album.release_date.slice(0, 4)}
                                            </SPlaylist.PlaylistAuthor>
                                        </SSAlbum.AlbumRedirect>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </SSwiper.SwiperMain>
                    </SSwiper.SwiperContainer>
                </div>
            )}
        </StyledContainer>
    )
}

export default Artist
