/* eslint-disable jsx-a11y/alt-text */
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Login from "../assets/Login.json";
import Buttons from "../components/Buttons/Buttons";
import NavBarPlayer from "../components/NavBarPlayer/NavBarPlayer";
import Track from "../components/queue/components/Track/Track";
import GetData from "../hooks/GetData/GetData";
import { Album } from "../hooks/types/GetAlbum";
import { LikedArtistSongs } from "../hooks/types/GetLikedSongs";
import * as SSMain from "../styles/components/Spotify/MainSongs/Main.style";
import * as S from "../styles/pages/auth/login.style";


export type TrackId = {
  id: string;
  position: number;
  trackname: string;
  artist: LikedArtistSongs[];
  album: {
    name: string;
    id: string;
  };
  duration_ms: number;
  images: string;
};
export type Tracks = {
  position: number;
  from?: {
    name?: string;
    id?: string | undefined;
    type?: string;
  };
  tracks: TrackId[];
  aleatory?: number;
};




const Index: NextPage = () => {
  const [track, setTracks] = useState<Tracks>({} as Tracks )
  const GetIcons = () => {
    const Icon = useMemo(
      () => dynamic(() => import("../../public/landing/swapi.svg")),
      []
    );
    if (Icon) {
      return <Icon />;
    }
    return null;
  };

  const data = GetData<Album>("https://api.spotify.com/v1/albums/6Pe5LGQgU3mmvuRjFMsACV")
  
  useEffect(() => {
    Object.keys(data).length > 0 &&  localStorage.setItem("miniPlayer", JSON.stringify(data));
  }, [data])
  
  
  const newTracks = data?.tracks?.items?.map((item, index) => {
    return {
      id: item.id,
      position: index,
      trackname: item.name,
      artist: item.artists,
      album: {
        id: data?.id,
        name: data?.name,
        type: data?.type,
      },
      duration_ms: item.duration_ms,
      images: data.images[2]?.url,
    };
  });
  const handlePlayId = (id: number) => {
    setTracks({
      tracks: newTracks,
      position: id,
    });
  };
  
  console.log(track);
  
  return (
    <S.LoginBody>
      <S.NavBar>
        <S.LoginTitle>{<GetIcons />}Swapi</S.LoginTitle>
        <S.NavBarButtons >
          {Login.filter((_, index) => index === 0).map((button) => (
            <Buttons key={button} button={button} />
          ))}
        </S.NavBarButtons>
      </S.NavBar>
      <S.Aside>
        <div>
          <S.LoginQuestion>
            Listen to your <span>Dreams</span>
          </S.LoginQuestion>
          <S.NavBarPhrase>
            Listen your music favorite with us, and take inspiration with our
            music!
          </S.NavBarPhrase>
          <S.NavBarButtons >
            {Login.filter((_, index) => index === 1).map((button) => (
              <Buttons key={button} button={button} />
            ))}
          </S.NavBarButtons>
        </div>
        <S.ListTracks>
          <div>
            <h4>Album</h4>
            {newTracks?.map((track, index) => (
              <SSMain.SongCard key={track.id}>
                <Track
                  // editPosition={1}
                  key={track.id}
                  track={track}
                  index={index  - 1}
                  handleId={()=>handlePlayId(index)}
                 
                />
              </SSMain.SongCard>
            ))}
          </div>
          <NavBarPlayer   setTracks={setTracks} position={false} mini_player={false} track={track}/>
        </S.ListTracks>
      </S.Aside>
      <S.Footer>
        <a href="https://github.com/Whil117" target="_blank" rel="noreferrer">
          <Image src={"/landing/me.png"} width={100} height={100} />
        </a>
      </S.Footer>
    </S.LoginBody>
  );
};

export default Index;
