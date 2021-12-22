/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import Cookies from "js-cookie";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Login from "../assets/Login.json";
import { clientId, clientSecret } from "../assets/swapi";
import Buttons from "../components/Buttons/Buttons";
import NavBarPlayer from "../components/NavBarPlayer/NavBarPlayer";
import Track from "../components/queue/components/Track/Track";
import UserImage from "../components/Spotify/UserImage/UserImage";
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
  const [state, setstate] = useState<TrackId[]>([])
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



  useEffect(() => {
    // Api call for retrieving token
    axios('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
                  'Basic ' +
                  new Buffer(clientId + ':' + clientSecret).toString(
                    'base64'
                  ),
      },
      data: 'grant_type=client_credentials',
    })
      .then((tokenresponse) => {
        tokenresponse.data.access_token &&Cookies.set("reserve_token", tokenresponse.data.access_token)
        // Cookies.set("token","BQBtSDS0fVp1tK7D6FF3syuasnzYGwPRnivjYM_Y53eLjREsu_1GtNNEhd2SFI5bCq9x65Wx9c0dJW-Wfkmxf6yyY7VdClhhiJH76bf5tj3-IeGWZ8mWy0LzO17x9KTOC0eyywHcdMjD-0mF3y_-UEp_Hg")
      })
      .catch((error) => console.log(error))
  }, [])
  
  const data = GetData<Album>("https://api.spotify.com/v1/albums/6Pe5LGQgU3mmvuRjFMsACV")
  
  useEffect(() => {
    Object.keys(data).length > 0 &&  localStorage.setItem("miniPlayer", JSON.stringify(data));
  }, [data])
  

  useEffect(() => {
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
    data && setstate(newTracks)
  }, [data])
  const handlePlayId = (id: number) => {
    setTracks({
      tracks: state,
      position: id,
    });
  };

  const tecnologies = ["next", "react", "typescript", "emotion"];
  console.log(data);
  
  console.log(state);
  
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
            <h4>{data?.name} - Album</h4>
            {state?.map((track, index) => (
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
      <S.Aside>
        <UserImage 
          url="/landing/caset.png"
          size={563}
        />
        <div>
          <S.LoginQuestion>One site fol all your <span>inspiration</span></S.LoginQuestion>
          <S.NavBarPhrase>
        Listen all your favorites songs and discovery more world’s
          </S.NavBarPhrase>
        </div>
      </S.Aside>
      <S.Aside>
        <div>
          <S.SpotifyTitle>
          With integration from <span>Spotify API</span> 
          </S.SpotifyTitle>
          <S.SpotifyPhrase>
        All you data from spotify. Don’t have start from 0. And you can add more songs, albums, podcats.
          </S.SpotifyPhrase>
        </div>
        <div>
          <UserImage 
            url="/landing/spotify.svg"
            size={563}
          />
        </div>
      </S.Aside>
      <S.Aside>
        <div>
          <S.SpotifyTitle>Technologies</S.SpotifyTitle>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            {tecnologies.map((tech) => (
              <UserImage 
                key={tech}
                url={`/landing/${tech}.svg`}
                {...tech === "next" ? {width: 400, height:30} : { height:205, width:220} }
              />
            ))}
          </div>
        </div>
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
