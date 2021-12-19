import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { GetPlaylist } from "../../../hooks/types/GetCurrentUserPlaylist";
import { IPlaylist } from "../../../hooks/types/GetPlayList";
import useActiveOptContext from "../../../hooks/useActiveOptContext/useActiveOptContext";
import * as S from "../../../styles/pages/library/library.style";
import PlayList from "./PlayList";
interface IPlayList {
  items?: GetPlaylist[];
}
const Playlists: FC<IPlayList> = ({ items }) => {
  const { setActive } = useContext(useActiveOptContext);
  const router = useRouter();
  const handleSetActive = () => {
    router.push("/LikedSongs");
    setActive("/LikedSongs");
  };
  return (
    <S.Playlists>
      <S.LikedSongsWrapper onClick={handleSetActive}>
        Liked Songs
      </S.LikedSongsWrapper>
      {items?.map((playlist: IPlaylist) => (
        <PlayList key={playlist.id} playlist={playlist} />
      ))}
    </S.Playlists>
  );
};

export default Playlists;
