import Link from 'next/link'
import { FC, useContext, useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import validPid from '../../helpers/pages/artist/ValidPid'
import GetData from '../../hooks/GetData/GetData'
import { Artist } from '../../hooks/types/GetAlbum'
import { AlbumArtist } from '../../hooks/types/GetArtistAlbum'
import UserContext from '../../hooks/UserContext/UserContext'
import useWindowSize from '../../hooks/useWindowSize/useWindowSize'
import * as S from '../../styles/components/albums/albums.style'
import * as SSwiper from '../../styles/components/albums/Swiper/SwiperContainer.style'
import * as SPlaylist from '../../styles/pages/library/library.style'
import UserImage from '../Spotify/UserImage/UserImage'
import typeSizeCreen from './helpers/typeSizeCreen'
type Payload = {
    id: string
    tag: string
    type: string
    image: string
    url: string
}

const AlbumArtist: FC<{ artists: Artist[] }> = ({ artists }) => {
    const urlArtistAlbums = `https://api.spotify.com/v1/artists/${
        artists && artists[0].id
    }/albums`

    const { items } = GetData<AlbumArtist>(
        validPid(urlArtistAlbums, artists && artists[0]?.id)
    )
    const [screenItems, setScreenItems] = useState(7)
    const sizeScreen = useWindowSize()
    const { recent, setRecent } = useContext(UserContext)
    useEffect(() => setScreenItems(typeSizeCreen(sizeScreen)), [sizeScreen])
    const handleMiddleClick = (payload: Payload) => {
        if (
            recent?.find(
                (item: Payload) =>
                    item.id === payload.id || item.tag === payload.tag
            )
        ) {
            return
        } else if (recent.length < 6) {
            setRecent([payload, ...recent])
        } else {
            setRecent([payload, ...recent.slice(0, 6)])
        }
    }
    const payloadAlbum = (id: number) => {
        return {
            id: items && items[id].id,
            tag: items && items[id].name,
            type: 'album',
            image: items && items[id].images[0].url,
            url: `/album/${items && items[id].id}`,
        }
    }

    return (
        <>
            {items && (
                <footer>
                    {' '}
                    <S.AlbumsFooterHeader>
                        <h3>More by {items[0]?.artists[0].name} </h3>
                        <Link
                            href={{
                                pathname: '/discography/[pid]',
                                query: {
                                    pid: items[0]?.artists[0].id,
                                },
                            }}
                            passHref
                        >
                            <S.AlbumsFooterButton>
                                See Discography
                            </S.AlbumsFooterButton>
                        </Link>
                    </S.AlbumsFooterHeader>
                    <SSwiper.SwiperContainer>
                        <SSwiper.SwiperMain
                            className="mySwiper"
                            modules={[Navigation]}
                            navigation
                            spaceBetween={1}
                            slidesPerView={screenItems}
                        >
                            {items.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <Link
                                        href={{
                                            pathname: '/album/[pid]',
                                            query: { pid: item?.id },
                                        }}
                                        passHref
                                        key={item.id}
                                    >
                                        <S.AlbumRedirect
                                            onClick={() =>
                                                handleMiddleClick(
                                                    payloadAlbum(index)
                                                )
                                            }
                                        >
                                            {item.images.length > 0 && (
                                                <UserImage
                                                    url={item.images[0].url}
                                                    displayName={item.name}
                                                    size={166}
                                                    bradius={10}
                                                />
                                            )}
                                            <SPlaylist.PlaylistTitle>
                                                {item.name.length > 16
                                                    ? `${item.name
                                                          .slice(0, 16)
                                                          .trim()}...`
                                                    : item.name.slice(0, 16)}
                                            </SPlaylist.PlaylistTitle>
                                            <SPlaylist.PlaylistAuthor>
                                                {item.release_date.slice(0, 4)}
                                            </SPlaylist.PlaylistAuthor>
                                        </S.AlbumRedirect>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </SSwiper.SwiperMain>
                    </SSwiper.SwiperContainer>
                </footer>
            )}
        </>
    )
}

export default AlbumArtist
