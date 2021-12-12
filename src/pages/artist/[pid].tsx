import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import typeSizeCreen from '../../components/Albums/helpers/typeSizeCreen'
import ArtistTrack from '../../components/Artist/components/Tracks/Track'
import UserImage from '../../components/Spotify/UserImage/UserImage'
import formatNumber from '../../helpers/pages/artist/FormatNumbers'
import UpdateTracks from '../../helpers/pages/artist/UpdateTracks'
import validPid from '../../helpers/pages/artist/ValidPid'
import GetData from '../../hooks/GetData/GetData'
import { AlbumArtist } from '../../hooks/types/GetArtistAlbum'
import { Artist } from '../../hooks/types/GetFollowedArts'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import useWindowSize from '../../hooks/useWindowSize/useWindowSize'
import * as SSAlbum from '../../styles/components/albums/albums.style'
import * as SSwiper from '../../styles/components/albums/Swiper/SwiperContainer.style'
import { StyledContainer } from '../../styles/general/styles'
import * as SPlaylist from '../../styles/pages/library/library.style'
import * as S from '../../styles/pages/User/UserHeader.style'
import { Tracks } from '../../types/pages/artist/Tracks'
const Artist: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query

    const urlArtist = `https://api.spotify.com/v1/artists/${pid}`
    const urlAlbums = `https://api.spotify.com/v1/artists/${pid}/albums`
    const urlTopTracks = `https://api.spotify.com/v1/artists/${pid}/top-tracks?market=ES`

    const { name, images, followers } = GetData<Artist>(
        validPid(urlArtist, pid)
    )
    const { items } = GetData<AlbumArtist>(validPid(urlAlbums, pid))
    const { tracks } = GetData<Tracks>(validPid(urlTopTracks, pid))
    const [screenItems, setScreenItems] = useState(7)
    const sizeScreen = useWindowSize()
    const { setTracks } = useContext(UserTrackContext)

    useEffect(() => setScreenItems(typeSizeCreen(sizeScreen)), [sizeScreen])

    const updatedTracks = UpdateTracks(tracks)

    const handlePlayId = (id: number) => {
        setTracks({
            tracks: updatedTracks.filter((track) => track.position === id),
            position: id,
        })
    }

    return (
        <StyledContainer>
            {name && (
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
            )}
            {tracks && (
                <>
                    <h2>Top tracks</h2>
                    {tracks &&
                        tracks
                            ?.filter((_, index) => index < 5)
                            ?.map((song, index) => (
                                <ArtistTrack
                                    key={song.id}
                                    song={song}
                                    handlePlayId={() => handlePlayId(index)}
                                    index={index}
                                />
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
