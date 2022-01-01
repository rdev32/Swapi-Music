import axios from "axios";
import Cookies from "js-cookie";
import { NextPage } from "next";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import Login from "../assets/Login.json";
import { account } from "../assets/spotify";
import { clientId, clientSecret } from "../assets/swapi";
import tecnologies from "../assets/tecnologies.json";
import Buttons from "../components/Buttons/Buttons";
import { GetIcons } from "../components/Icons/Icons";
import NavBarPlayer from "../components/NavBarPlayer/NavBarPlayer";
import Track from "../components/queue/components/Track/Track";
import UserImage from "../components/Spotify/UserImage/UserImage";
import GetData from "../hooks/GetData/GetData";
import { Album } from "../hooks/types/GetAlbum";
import { Tracks } from "../hooks/UserTrackContext/types";
import * as SSMain from "../styles/components/Spotify/MainSongs/Main.style";
import * as S from "../styles/pages/auth/login.style";
import Index from "../types/pages/index.types";

const Index: NextPage<Index> = ({ access_token }) => {
  const [track, setTracks] = useState<Tracks>({} as Tracks);

  useLayoutEffect(() => {
    access_token && Cookies.set("reserve_token", access_token);
  }, [access_token]);

  const data = GetData<Album>(
    "https://api.spotify.com/v1/albums/6Pe5LGQgU3mmvuRjFMsACV"
  );

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

  return (
    <S.LoginBody>
      <S.NavBar>
        <S.LoginTitle>{<GetIcons />}Swapi</S.LoginTitle>
        <S.NavBarButtons>
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
          <S.NavBarButtons>
            {Login.filter((_, index) => index === 1).map((button) => (
              <Buttons key={button} button={button} />
            ))}
          </S.NavBarButtons>
        </div>
        {/* <S.ListTracks>
          <div>
            {data && <h4>{data?.name} - Album</h4>}
            {newTracks?.map((track, index) => (
              <SSMain.SongCard key={track.id}>
                <Track
                  key={track.id}
                  track={track}
                  index={index - 1}
                  handleId={() => handlePlayId(index)}
                />
              </SSMain.SongCard>
            ))}
          </div>
          <NavBarPlayer
            setTracks={setTracks}
            position={false}
            mini_player={false}
            track={track}
          />
        </S.ListTracks> */}
      </S.Aside>
      <S.Aside>
        <UserImage url="/landing/caset.png" size={563} />
        <div>
          <S.LoginQuestion>
            One site fol all your <span>inspiration</span>
          </S.LoginQuestion>
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
            All you data from spotify. Don’t have start from 0. And you can add
            more songs, albums, podcats.
          </S.SpotifyPhrase>
        </div>
        <div>
          <UserImage url="/landing/spotify.svg" size={563} />
        </div>
      </S.Aside>
      <S.Aside>
        <div>
          <S.SpotifyTitle>Technologies</S.SpotifyTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {tecnologies.map((tech) => (
              <UserImage
                key={tech}
                url={`/landing/${tech}.svg`}
                {...(tech === "next"
                  ? { width: 400, height: 30 }
                  : { height: 205, width: 220 })}
              />
            ))}
          </div>
        </div>
      </S.Aside>
      <S.Footer>
        <a href="https://github.com/Whil117" target="_blank" rel="noreferrer">
          <Image src={"/landing/me.png"} width={100} height={100} alt="whil" />
        </a>
      </S.Footer>
    </S.LoginBody>
  );
};

export async function getStaticProps() {
  const res = await axios(account, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    data: "grant_type=client_credentials",
  });
  const {
    data: { access_token },
  } = res;

  // access_token && Cookies.set("reserve_token", access_token)

  return {
    props: { access_token },
  };
}

export default Index;
