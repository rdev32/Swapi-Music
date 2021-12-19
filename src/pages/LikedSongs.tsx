import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Songs from "../components/Spotify/LikedSong/Songs";
import GetData from "../hooks/GetData/GetData";
import { GetLikedSongs, LikedSongs } from "../hooks/types/GetLikedSongs";
import * as S from "../styles/general/styles";
import { NavBarLikedSongs } from "../styles/pages/likedSongs/likedSongs.style";

const LikedSongs: NextPage = () => {
  const [count, setcount] = useState(0);
  const url = `https://api.spotify.com/v1/me/tracks?limit=50&offset=${count}`;
  const data = GetData<GetLikedSongs>(url);
  const [tracks, setTracks] = useState<LikedSongs[]>([]);
  const Container = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    data?.items?.length > 0 && setTracks([...tracks, ...data.items]);
  }, [data]);
  const tabla: any = {};

  useEffect(() => {
    if (Container.current) {
      window.onscroll = () => {
        if (Container.current) {
          if (
            window.innerHeight + window.scrollY >=
            Container.current.scrollHeight
          ) {
            if (data?.offset <= data.total) {
              setcount(count + 50);
            }
          }
          setScroll(window.scrollY);
        }
      };
    }
  }, [Container, count, data]);

  return (
    <>
      {" "}
      <NavBarLikedSongs scroll={scroll}>
        <h1>Liked Songs</h1>
      </NavBarLikedSongs>
      <S.StyledContainer ref={Container}>
        <h1>Liked Songs</h1>
        <Songs
          data={tracks.filter((track) => {
            if (!tabla[track.track.id]) {
              tabla[track.track.id] = true;
              return true;
            }
            return false;
          })}
        />
      </S.StyledContainer>
    </>
  );
};

export default LikedSongs;
