import Link from "next/link";
import { FC } from "react";
import { IArtists } from "../../../../hooks/types/GetSearch";
import * as SSong from "../../../../styles/components/Spotify/MainSongs/components/Song/Song.style";

const Artists: FC<{ track: { artists: IArtists[] } }> = ({ track }) => {
  return (
    <>
      {track?.artists?.map((artist, index) => (
        <Link
          key={artist?.id}
          href={{
            pathname: "/artist/[pid]",
            query: {
              pid: artist?.id,
            },
          }}
          passHref
        >
          <SSong.SongArtist>
            {index === 0 ? "" : `,`} {artist?.name}
          </SSong.SongArtist>
        </Link>
      ))}
    </>
  );
};

export default Artists;
