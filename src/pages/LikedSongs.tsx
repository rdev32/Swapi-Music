import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import NavBarScroll from "../components/NavBar/components/NavBarScroll/NavBarScroll";
import Songs from "../components/Spotify/LikedSong/Songs";
import GetData from "../hooks/GetData/GetData";
import { GetLikedSongs, LikedSongs } from "../hooks/types/GetLikedSongs";
import useScroll from "../hooks/useScroll/useScroll";
import * as S from "../styles/general/styles";

const LikedSongs: NextPage = () => {
  const [tracks, setTracks] = useState<LikedSongs[]>([]);
  const [data, setData] = useState<GetLikedSongs>({} as GetLikedSongs);
  const Container = useRef<HTMLDivElement>(null);
  const [scroll, count] =  useScroll({ ref: Container, data });
  const url = `https://api.spotify.com/v1/me/tracks?limit=50&offset=${count}`;
  const newData = GetData<GetLikedSongs>(url);

  useEffect(() => {
    newData && setData(newData);
  }, [newData])
  useEffect(() => {
    data?.items?.length > 0 && setTracks([...tracks, ...data.items]);
  }, [data]);
  const tabla: any = {};
 
  return (
    <>
      <NavBarScroll title="Liked Songs" scroll={scroll} />
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
