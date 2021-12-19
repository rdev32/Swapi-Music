import Link from "next/link";
import { FC } from "react";
import { GetPlayerIcons } from "../../../../../components/Icons/Icons";
import GetTimeSongs from "../../../../../hooks/GetTimeSongs/GetTimeSongs";
import { IArtist } from "../../../../../hooks/types/GetTopSongs";
import * as S from "../../../../../styles/components/Spotify/MainSongs/components/Song/Song.style";
import * as SSMain from "../../../../../styles/components/Spotify/MainSongs/Main.style";
interface IProps {
  song: IArtist;
  index: number;
  handleId?: () => void;
}

const Song: FC<IProps> = ({ song, handleId, index }) => {
  const [hour, minutes, seconds] = GetTimeSongs({ ms: song?.duration_ms });

  return (
    <S.Song key={song?.id}>
      <S.SongMain>
        <S.SongNumberItem>
          <SSMain.SongNumber>{index + 1}</SSMain.SongNumber>
          <SSMain.Button onClick={handleId}>
            <GetPlayerIcons name="playcenter" />
          </SSMain.Button>
        </S.SongNumberItem>
        <S.SongDescription>
          <S.SontTitle>{song?.name}</S.SontTitle>
          <S.SongArtists>
            {song?.artists?.map((artist, index) => (
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
                <S.SongArtist>
                  {index === 0 ? "" : `,`} {artist?.name}
                </S.SongArtist>
              </Link>
            ))}
          </S.SongArtists>
        </S.SongDescription>
      </S.SongMain>
      <S.SongMinutesBox>
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
      </S.SongMinutesBox>
    </S.Song>
  );
};

export default Song;
