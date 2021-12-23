import Link from "next/link";
import { FC } from "react";
import { GetPlayerIcons } from "../../../../components/Icons/Icons";
import UserImage from "../../../../components/Spotify/UserImage/UserImage";
import GetTimeSongs from "../../../../hooks/GetTimeSongs/GetTimeSongs";
import * as SSong from "../../../../styles/components/Spotify/MainSongs/components/Song/Song.style";
import * as SSMain from "../../../../styles/components/Spotify/MainSongs/Main.style";
import { Track } from "../../../../types/pages/artist/Tracks";

interface IProps {
  index: number;
  handlePlayId: (index: number) => void;
  song: Track;
}

const ArtistTrack: FC<IProps> = ({ index, handlePlayId, song }) => {
  const [hour, minutes, seconds] = GetTimeSongs({ ms: song.duration_ms });

  return (
    <SSMain.SongCard key={song.id}>
      <SSong.Song key={song?.id}>
        <SSong.SongMain>
          <SSong.SongNumberItem>
            <SSMain.SongNumber>{index + 1}</SSMain.SongNumber>
            <SSMain.Button onClick={() => handlePlayId(index)}>
              <GetPlayerIcons name="playcenter" />
            </SSMain.Button>
          </SSong.SongNumberItem>
          {song?.album?.images?.length > 0 && (
            <UserImage
              url={song?.album?.images[0]?.url}
              displayName={song.album.name}
              size={55}
              bradius={10}
              name="songout"
            />
          )}
          <SSong.SongDescription>
            <SSong.SontTitle>{song?.name}</SSong.SontTitle>
            <SSong.SongArtists width={200}>
              {song?.artists.map((artist, index) => (
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
              query: {
                pid: song?.album?.id,
              },
            }}
            passHref
          >
            <a>{song?.album?.name}</a>
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
    </SSMain.SongCard>
  );
};

export default ArtistTrack;
