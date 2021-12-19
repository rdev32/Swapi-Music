import Link from "next/link";
import { FC } from "react";
import GetTimeSongs from "../../../../hooks/GetTimeSongs/GetTimeSongs";
import { TrackId } from "../../../../hooks/UserTrackContext/types";
import * as SSong from "../../../../styles/components/Spotify/MainSongs/components/Song/Song.style";
import * as SSMain from "../../../../styles/components/Spotify/MainSongs/Main.style";
import { GetPlayerIcons } from "../../../Icons/Icons";
import UserImage from "../../../Spotify/UserImage/UserImage";

interface IProps {
  index: number;
  track: TrackId;
  editPosition?: number;
  handleId?: () => void;
}

const Track: FC<IProps> = ({ track, index, handleId, editPosition }) => {
  const [hour, minutes, seconds] = GetTimeSongs({
    ms: track?.duration_ms,
  });

  return (
    <SSong.Song key={track?.id}>
      <SSong.SongMain>
        <SSong.SongNumberItem>
          <SSMain.SongNumber>
            {editPosition ? editPosition : index + 2}
          </SSMain.SongNumber>
          <SSMain.Button onClick={handleId}>
            <GetPlayerIcons name="playcenter" />
          </SSMain.Button>
        </SSong.SongNumberItem>
        <UserImage
          url={track.images || ""}
          displayName={track.album.name}
          size={55}
          bradius={10}
          name="songout"
        />
        <SSong.SongDescription>
          <SSong.SontTitle>{track?.trackname}</SSong.SontTitle>
          <SSong.SongArtists>
            {track?.artist.map((artist, index) => (
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
          </SSong.SongArtists>
        </SSong.SongDescription>
      </SSong.SongMain>
      <SSong.SongTitleAlbum>
        <Link
          href={{
            pathname: "/album/[pid]",
            query: { pid: track?.album?.id },
          }}
          passHref
        >
          <a>{track?.album?.name}</a>
        </Link>
      </SSong.SongTitleAlbum>
      <SSong.SongMinutesBox>
        <p>
          {" "}
          {hour ? `${hour} ${minutes}` : ""}{" "}
          {!hour
            ? `${minutes}:${
              seconds?.toFixed(0).length === 1
                ? `0${seconds.toFixed()}`
                : seconds?.toFixed()
            }`
            : ""}
        </p>
      </SSong.SongMinutesBox>
    </SSong.Song>
  );
};

export default Track;
