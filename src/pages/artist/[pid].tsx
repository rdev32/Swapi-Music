import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import typeSizeCreen from "../../components/Albums/helpers/typeSizeCreen";
import ArtistTrack from "../../components/Artist/components/Tracks/Track";
import UserImage from "../../components/Spotify/UserImage/UserImage";
import formatNumber from "../../helpers/pages/artist/FormatNumbers";
import UpdateTracks from "../../helpers/pages/artist/UpdateTracks";
import validPid from "../../helpers/pages/artist/ValidPid";
import GetData from "../../hooks/GetData/GetData";
import { AlbumArtist } from "../../hooks/types/GetArtistAlbum";
import { Artist } from "../../hooks/types/GetFollowedArts";
import UserContext from "../../hooks/UserContext/UserContext";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import * as SSAlbum from "../../styles/components/albums/albums.style";
import * as SSwiper from "../../styles/components/albums/Swiper/SwiperContainer.style";
import { StyledContainer } from "../../styles/general/styles";
import * as SPlaylist from "../../styles/pages/library/library.style";
import * as S from "../../styles/pages/User/UserHeader.style";
import { Tracks } from "../../types/pages/artist/Tracks";

type Payload = {
  id: string;
  tag: string;
  type: string;
  image: string;
  url: string;
};

const Artist: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const urlArtist = `https://api.spotify.com/v1/artists/${pid}`;
  const urlAlbums = `https://api.spotify.com/v1/artists/${pid}/albums`;
  const urlTopTracks = `https://api.spotify.com/v1/artists/${pid}/top-tracks?market=ES`;

  const { name, images, followers } = GetData<Artist>(validPid(urlArtist, pid));
  const { items } = GetData<AlbumArtist>(validPid(urlAlbums, pid));
  const { tracks } = GetData<Tracks>(validPid(urlTopTracks, pid));
  const [screenItems, setScreenItems] = useState(7);
  const sizeScreen = useWindowSize();
  useEffect(() => setScreenItems(typeSizeCreen(sizeScreen)), [sizeScreen]);
  const { recent, setRecent, setTracks } = useContext(UserContext);

  const updatedTracks = UpdateTracks(tracks);
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
  const handlePlayId = (id: number) => {
    setTracks({
      tracks: updatedTracks.filter((track) => track.position === id),
      position: id,
    });
  };

  const payloadAlbum = (id: number) => {
    return {
      id: items && items[id].id,
      tag: items && items[id].name,
      type: "album",
      image: items && items[id].images[0].url,
      url: `/album/${items && items[id].id}`,
    };
  };

  return (
    <StyledContainer>
      {name && (
        <S.UserHeaderStyle width="370px">
          <div>
            {images && (
              <UserImage
                key={images[0].url}
                url={images[0].url || ""}
                bradius={120}
                displayName={name}
                size={220}
                name="artistout"
              />
            )}
          </div>
          <aside>
            <S.UserProfile>ARTIST</S.UserProfile>
            <S.UserName>{name}</S.UserName>
            <S.UserFooterButton>
              {formatNumber(followers?.total)}
            </S.UserFooterButton>
          </aside>
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
              {items?.map((album, index) => (
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
    </StyledContainer>
  );
};

export default Artist;
