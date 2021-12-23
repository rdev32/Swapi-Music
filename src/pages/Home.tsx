import Cookies from "js-cookie";
import { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import typeSizeCreen from "../components/Albums/helpers/typeSizeCreen";
import GetSalute from "../components/GetSalute/GetSalute";
import UserImage from "../components/Spotify/UserImage/UserImage";
import AtomIcon from "../components/SvgDynamic/SvgDynamic";
import UserArtists from "../components/User/UserTopArtists";
import validPid from "../helpers/pages/artist/ValidPid";
import GetData from "../hooks/GetData/GetData";
import { ArtistAlbums } from "../hooks/types/GetTrack";
import UserContext from "../hooks/UserContext/UserContext";
import useWindowSize from "../hooks/useWindowSize/useWindowSize";
import * as SSAlbum from "../styles/components/albums/albums.style";
import * as SSwiper from "../styles/components/albums/Swiper/SwiperContainer.style";
import * as S from "../styles/general/styles";
import * as SSHome from "../styles/pages/Home.style";
import * as SPlaylist from "../styles/pages/library/library.style";
import { Payload } from "../types/pages/payload.types";

const Home: NextPage = () => {
  const { recent, setRecent } = useContext(UserContext);
  const [screenItems, setScreenItems] = useState(7);
  const sizeScreen = useWindowSize();
  useEffect(() =>{ 
    setScreenItems(typeSizeCreen(sizeScreen)) 
    return ()=> {
      setScreenItems(7)
    }
  } , [sizeScreen]);
  const getTokenParams = (hash: string) => {
    const strHashTag = hash.substring(1);
    const paramsUrl = strHashTag.split("&");
    const paramsSplit = paramsUrl.reduce((acc: any, curr) => {
      const [key, value] = curr.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramsSplit;
  };

  useLayoutEffect(() => {
    if (window.location.hash) {
      const { access_token } = getTokenParams(window.location.hash);
      Cookies.set("token", access_token);
    }
    return () => {
    }
  }, []);

  const urlNewReleases =
    "https://api.spotify.com/v1/browse/new-releases?locale=es-419&offset=0&limit=20";

  const { albums } = GetData<ArtistAlbums>(validPid(urlNewReleases, "true"));

  const handleMiddleClick = (payload: Payload) => {
    if (
      recent?.find(
        (item: Payload) => item.id === payload.id || item.tag === payload.tag
      )
    ) {
      return;
    } else if (recent.length < 6) {
      setRecent([payload, ...recent]);
    } else {
      setRecent([payload, ...recent.slice(0, 6)]);
    }
  };

  const payloadAlbum = (id: number) => {
    return {
      id: albums?.items && albums?.items[id].id,
      tag: albums?.items && albums?.items[id].name,
      type: "album",
      image: albums?.items && albums?.items[id].images[0].url,
      url: `/album/${albums?.items && albums?.items[id].id}`,
    };
  };

  return (
    <S.StyledContainer>
      <GetSalute />
      <SSHome.Cards>
        <aside>
          <Link href="/LikedSongs" passHref>
            <SSHome.LikedSongButton>
              <AtomIcon name="Liked Songs" active />
              <p>Liked Songs</p>
            </SSHome.LikedSongButton>
          </Link>
          {recent.length > 0 &&
            recent.map((item) => (
              <Link href={item?.url} key={item.id} passHref>
                <SSHome.Card>
                  <AtomIcon name="Recent Song" active />
                  <UserImage
                    url={item.image.length > 0 ? item.image : ""}
                    size={69}
                    bradius={"10px 0 0 10px"}
                    name={item.type + "out"}
                  />
                  {item.tag.length > 15 ? (
                    <p style={{ width: "100px" }}>{item.tag.slice(0, 15)}...</p>
                  ) : (
                    <p style={{ width: "100px" }}>{item.tag}</p>
                  )}
                </SSHome.Card>
              </Link>
            ))}
        </aside>
      </SSHome.Cards>
      <UserArtists title="Your Favorites Artists" />
      {albums?.items?.length > 0 && (
        <div>
          <h2>New Releases</h2>
          <SSwiper.SwiperContainer>
            <SSwiper.SwiperMain
              className="mySwiper"
              modules={[Navigation]}
              navigation
              spaceBetween={1}
              slidesPerView={screenItems}
            >
              {albums?.items?.map((album, index) => (
                <SwiperSlide key={album.id}>
                  <Link
                    href={{
                      pathname: "/album/[pid]",
                      query: { pid: album?.id },
                    }}
                    passHref
                    key={album.id}
                  >
                    <SSAlbum.AlbumRedirect
                      onClick={() => handleMiddleClick(payloadAlbum(index))}
                    >
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
                          ? `${album.name.slice(0, 16).trim()}...`
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
    </S.StyledContainer>
  );
};

export default Home;
