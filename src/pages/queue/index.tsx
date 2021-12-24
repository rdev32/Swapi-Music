import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import NavBarScroll from "../../components/NavBar/components/NavBarScroll/NavBarScroll";
import Track from "../../components/queue/components/Track/Track";
import TrackList from "../../components/queue/components/TrackList/TrackList";
import UserContext from "../../hooks/UserContext/UserContext";
import useScroll from "../../hooks/useScroll/useScroll";
import * as SSMain from "../../styles/components/Spotify/MainSongs/Main.style";
import * as S from "../../styles/general/styles";
const Queue: NextPage = () => {
  const router = useRouter();
  const { tracks } = useContext(UserContext);
  const [scroll] = useScroll({ ref: { current: {} }, data: {} });

  useEffect(() => {
    if (!localStorage.getItem("tracks")) {
      router.back();
      
    }
    return () => {
      if (!localStorage.getItem("tracks")) {
        router.back();
        
      }}

  }, []);

 

  return (
    <>
      <NavBarScroll title="Queue" scroll={scroll} />
      <S.StyledContainer>
        <h1>Queue</h1>
        <div>
          <h4>Now Playing</h4>
          <div>
            {tracks?.tracks
              ?.filter((track) => track.position === tracks.position)
              .map((track, index) => (
                <SSMain.SongCard key={track.id}>
                  <Track
                    editPosition={1}
                    key={track.id}
                    track={track}
                    index={index}
                  />
                </SSMain.SongCard>
              ))}
          </div>
        </div>
        <aside>
          {!tracks?.from?.id && !tracks?.from?.name && <h4>Next Up</h4>}
          {tracks.from?.id && (
            <h4>
              Next From:{" "}
              <Link
                href={{
                  pathname: `/${tracks?.from?.type}/${tracks?.from?.id}`,
                }}
              >
                <a>{tracks?.from?.name}</a>
              </Link>
            </h4>
          )}

          {tracks?.tracks &&
          tracks.position ===
            tracks?.tracks[tracks.tracks.length - 1].position ? (
              <h3>Queue is empty :(</h3>
            ) : (
              <TrackList />
            )}
        </aside>
      </S.StyledContainer>
    </>
  );
};

export default Queue;
