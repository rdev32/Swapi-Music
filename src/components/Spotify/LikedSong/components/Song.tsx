import Link from "next/link";
import { FC } from "react";
import GetTimeSongs from "../../../../hooks/GetTimeSongs/GetTimeSongs";
import { LikedSongs } from "../../../../hooks/types/GetLikedSongs";
import * as SSong from "../../../../styles/components/Spotify/MainSongs/components/Song/Song.style";
import * as SSMain from "../../../../styles/components/Spotify/MainSongs/Main.style";
import { GetPlayerIcons } from "../../../Icons/Icons";
import UserImage from "../../UserImage/UserImage";

interface IProps {
  song: LikedSongs;
  index: number;
  handleId?: () => void;
}

const Song: FC<IProps> = ({ song, handleId, index }) => {
  const [hour, minutes, seconds] = GetTimeSongs({
    ms: song?.track?.duration_ms,
  });

  return (
    <SSong.Song key={song?.track?.id}>
      <SSong.SongMain>
        <SSong.SongNumberItem>
          <SSMain.SongNumber>{index + 1}</SSMain.SongNumber>
          <SSMain.Button onClick={handleId}>
            <GetPlayerIcons name="playcenter" />
          </SSMain.Button>
        </SSong.SongNumberItem>
        {song?.track?.album?.images?.length > 0 ? (
          <UserImage
            url={song?.track?.album?.images[0]?.url}
            displayName={song.track.album.name}
            size={55}
            bradius={10}
            name="songout"
          />
        ) : (
          <UserImage
            url={song?.track?.album?.images[0]?.url}
            displayName={song.track.album.name}
            size={55}
            bradius={10}
            name="songout"
          />
        )}
        <SSong.SongDescription>
          <SSong.SontTitle>{song?.track?.name}</SSong.SontTitle>
          <SSong.SongArtists>
            {song?.track?.artists.map((artist, index) => (
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
            query: { pid: song?.track?.album?.id },
          }}
          passHref
        >
          <a>{song?.track?.album?.name}</a>
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

export default Song;
