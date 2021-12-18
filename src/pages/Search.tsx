import { NextPage } from 'next'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import typeSizeCreen from '../components/Albums/helpers/typeSizeCreen'
import ArtistCard from '../components/Artist/Artist'
import { GetIcons } from '../components/Icons/Icons'
import SearchBar from '../components/Search/SearchBar/SearchBar'
import Song from '../components/Spotify/MainSongs/components/Song/Song'
import UserImage from '../components/Spotify/UserImage/UserImage'
import UserPublicPlaylist from '../components/User/UserPublicPlaylist'
import GetSearch from '../hooks/GetSearch/GetSearch'
import { IGetSearch } from '../hooks/types/GetSearch'
import UserContext from '../hooks/UserContext/UserContext'
import useWindowSize from '../hooks/useWindowSize/useWindowSize'
import * as SAlbums from '../styles/components/albums/albums.style'
import * as SSwiper from '../styles/components/albums/Swiper/SwiperContainer.style'
import { FormContainer } from '../styles/components/Search/SearchBar.style'
import * as STracks from '../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../styles/general/styles'
import * as SPlaylist from '../styles/pages/library/library.style'
import {
    SearchArstitMainDesc,
    SearchArtist,
    SearchImageContainer,
    SearchInit,
    SearchProfileContainer,
    SearchSection1,
    SearchTitleCategory,
    SearchTracksContainer,
    SearchType,
} from '../styles/pages/Search/Search.style'

const Search: NextPage = () => {
    const [search, setSearch] = useState<string>('')
    const [mount, setMount] = useState(false)
    const {
        data: { albums, artists, playlists, tracks },
        setCount,
    } = GetSearch<IGetSearch>(search, setMount)
    const { setTracks } = useContext(UserContext)
    const [screenItems, setScreenItems] = useState(7)
    const sizeScreen = useWindowSize()
    useEffect(() => setScreenItems(typeSizeCreen(sizeScreen)), [sizeScreen])

    const newTracks = tracks?.items?.map((track, index) => {
        return {
            id: track.id,
            position: index,
            trackname: track.name,
            artist: track.artists,
            album: {
                id: track.album.id,
                name: track.album.name,
                type: track.album.type,
            },
            duration_ms: track.duration_ms,
            images: track.album.images[0]?.url,
        }
    })

    const handlePlayId = (id: number) => {
        setTracks({
            tracks: newTracks.filter((track) => track.position === id),
            position: id,
            from: {
                name: tracks?.items[id].album.name,
                id: tracks?.items[id].album.id,
                type: 'album',
            },
        })
    }

    return (
        <S.StyledContainer>
            <FormContainer>
                <SearchBar
                    onChange={(event) => {
                        setSearch(event.target.value)
                        setCount(0)
                    }}
                    setSearch={setSearch}
                    value={search}
                    setMount={setMount}
                />
            </FormContainer>

            {!search && !mount && !artists ? (
                <SearchInit>
                    <GetIcons />
                    <h3>Search your favorite content</h3>
                </SearchInit>
            ) : null}
            {mount && (
                <>
                    <SearchSection1>
                        {artists?.items?.length !== 0 && (
                            <>
                                <SearchProfileContainer>
                                    <SearchTitleCategory>
                                        Result
                                    </SearchTitleCategory>
                                    <Link
                                        href={{
                                            pathname: '/artist/[pid]/',
                                            query: {
                                                pid: artists?.items[0].id,
                                            },
                                        }}
                                        passHref
                                    >
                                        <SearchArstitMainDesc>
                                            <SearchImageContainer>
                                                <UserImage
                                                    url={
                                                        artists?.items[0]
                                                            ?.images &&
                                                        artists?.items[0]
                                                            ?.images[0]?.url
                                                    }
                                                    displayName={
                                                        artists?.items[0].name
                                                    }
                                                    bradius={500}
                                                    height={250}
                                                    width={250}
                                                />
                                            </SearchImageContainer>
                                            <SearchType>
                                                {artists?.items[0]?.type?.toUpperCase()}
                                            </SearchType>
                                            <SearchArtist>
                                                {artists?.items[0]?.name}
                                            </SearchArtist>
                                        </SearchArstitMainDesc>
                                    </Link>
                                </SearchProfileContainer>
                            </>
                        )}

                        {tracks?.items?.length !== 0 && (
                            <SearchTracksContainer>
                                <SearchTitleCategory>
                                    Tracks
                                </SearchTitleCategory>
                                {tracks?.items
                                    ?.filter((_, index) => index < 5)
                                    .map((track, index) => (
                                        <STracks.SongCard key={track.id}>
                                            <Song
                                                item={track}
                                                index={index}
                                                handleId={() =>
                                                    handlePlayId(index)
                                                }
                                            />
                                        </STracks.SongCard>
                                    ))}
                            </SearchTracksContainer>
                        )}
                    </SearchSection1>
                    <aside>
                        {playlists?.items?.length !== 0 && (
                            <UserPublicPlaylist
                                title="Playlists"
                                data={playlists?.items}
                            />
                        )}
                    </aside>
                    <div>
                        {artists?.items?.length !== 0 && (
                            <>
                                <SearchTitleCategory>
                                    Artist
                                </SearchTitleCategory>
                                <SSwiper.SwiperContainer>
                                    <SSwiper.SwiperMain
                                        className="mySwiper"
                                        modules={[Navigation]}
                                        navigation
                                        spaceBetween={1}
                                        slidesPerView={screenItems}
                                    >
                                        {artists?.items?.map((artist) => (
                                            <SwiperSlide key={artist.id}>
                                                <ArtistCard
                                                    key={artist.id}
                                                    item={artist}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </SSwiper.SwiperMain>
                                </SSwiper.SwiperContainer>
                            </>
                        )}
                    </div>
                    <div>
                        {albums && albums?.items?.length !== 0 && (
                            <>
                                <SearchTitleCategory>
                                    Albums
                                </SearchTitleCategory>
                                <SSwiper.SwiperContainer>
                                    <SSwiper.SwiperMain
                                        className="mySwiper"
                                        modules={[Navigation]}
                                        navigation
                                        spaceBetween={1}
                                        slidesPerView={screenItems}
                                    >
                                        {albums.items.map((album) => (
                                            <SwiperSlide key={album.id}>
                                                <Link
                                                    href={{
                                                        pathname:
                                                            '/album/[pid]',
                                                        query: {
                                                            pid: album?.id,
                                                        },
                                                    }}
                                                    passHref
                                                    key={album.id}
                                                >
                                                    <SAlbums.AlbumRedirect>
                                                        {album.images.length >
                                                            0 && (
                                                            <UserImage
                                                                url={
                                                                    album
                                                                        .images[0]
                                                                        .url
                                                                }
                                                                displayName={
                                                                    album.name
                                                                }
                                                                size={166}
                                                                bradius={10}
                                                            />
                                                        )}
                                                        <SPlaylist.PlaylistTitle>
                                                            {album.name.length >
                                                            16
                                                                ? `${album.name
                                                                      .slice(
                                                                          0,
                                                                          16
                                                                      )
                                                                      .trim()}...`
                                                                : album.name.slice(
                                                                      0,
                                                                      16
                                                                  )}
                                                        </SPlaylist.PlaylistTitle>
                                                        <SPlaylist.PlaylistAuthor>
                                                            {album.release_date.slice(
                                                                0,
                                                                4
                                                            )}
                                                        </SPlaylist.PlaylistAuthor>
                                                    </SAlbums.AlbumRedirect>
                                                </Link>
                                            </SwiperSlide>
                                        ))}
                                    </SSwiper.SwiperMain>
                                </SSwiper.SwiperContainer>
                            </>
                        )}
                    </div>
                </>
            )}
        </S.StyledContainer>
    )
}

export default Search
