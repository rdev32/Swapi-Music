import { FC, useContext } from "react";
import UserContext from "../../../../hooks/UserContext/UserContext";
import * as SMain from "../../../../styles/components/Spotify/MainSongs/Main.style";
import Track from "../Track/Track";

const TrackList: FC = () => {
  const { tracks: tracksContext, setTracks } = useContext(UserContext);

  const handlePlayId = (id: number) => {
    setTracks({ ...tracksContext, position: id });
  };

  return (
    <>
      {tracksContext.tracks
        ?.filter((track) => track.position > tracksContext.position)
        .map((track, index) => (
          <SMain.SongCard key={track.id}>
            <Track
              key={track.id}
              {...{ track, index }}
              handleId={() => handlePlayId(track.position)}
            />
          </SMain.SongCard>
        ))}
    </>
  );
};

export default TrackList;
