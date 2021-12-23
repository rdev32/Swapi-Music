import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Track from "../../components/queue/components/Track/Track";
import TrackList from "../../components/queue/components/TrackList/TrackList";
import UserContext from "../../hooks/UserContext/UserContext";
import * as SSMain from "../../styles/components/Spotify/MainSongs/Main.style";
import * as S from "../../styles/general/styles";
import { NavBarLikedSongs } from "../../styles/pages/likedSongs/likedSongs.style";
const Queue: NextPage = () => {
  const router = useRouter();
  const { tracks } = useContext(UserContext);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    if (!localStorage.getItem("tracks")) {
      router.back();
      
    }
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
    return () => {
      window.onscroll = () => {};
    };
  });

  return (
    <>
      <NavBarLikedSongs scroll={scroll}>
        <h1>Queue</h1>
      </NavBarLikedSongs>
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
