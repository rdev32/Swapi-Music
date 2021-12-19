import { Tracks } from "../../../types/pages/artist/Tracks";

const UpdateTracks = (tracks: Tracks["tracks"]) => {
  return tracks?.map((item, index) => {
    return {
      id: item.id,
      position: index,
      trackname: item.name,
      artist: item.artists,
      album: {
        id: item.album.id,
        name: item.album.name,
        type: item.album.type,
      },
      duration_ms: item.duration_ms,
      images: item.album.images[0]?.url,
    };
  });
};
export default UpdateTracks;
