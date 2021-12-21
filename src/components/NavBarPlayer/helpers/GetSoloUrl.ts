import { Tracks } from "../../../hooks/UserTrackContext/types";

const GetSoloUrl = (getTrack: Tracks | undefined) => {
  const url =
    getTrack?.tracks && getTrack?.tracks[0]?.id
      ? `https://api.spotify.com/v1/tracks/${getTrack?.tracks[0]?.id}`
      : "";

  return url;
};
export default GetSoloUrl;
