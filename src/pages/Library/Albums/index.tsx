import Link from "next/link";
import { FC, useContext } from "react";
import { domain } from "../../../assets/spotify";
import UserImage from "../../../components/Spotify/UserImage/UserImage";
import GetData from "../../../hooks/GetData/GetData";
import GetUserAlbums from "../../../hooks/types/GetUserAlbums";
import UserContext from "../../../hooks/UserContext/UserContext";
import * as SAlbums from "../../../styles/components/albums/albums.style";
import * as SFollow from "../../../styles/components/User/Following.style";
import * as S from "../../../styles/general/styles";
import * as SPlaylist from "../../../styles/pages/library/library.style";
import { Payload } from "../../../types/pages/payload.types";

const Albums: FC = () => {
  const { items } = GetData<GetUserAlbums>(
    `${domain}/albums?limit=50`
  );
  const { recent, setRecent } = useContext(UserContext);
  const handleMiddleClick = (payload: Payload) => {
    if (
      recent?.find(
        (item: Payload) => item.id === payload.id || item.tag === payload.tag
      )
    ) {
      return;
    } else if (recent.length < 6) {
      setRecent([payload, ...recent]);
    } else {
      setRecent([payload, ...recent.slice(0, 6)]);
    }
  };
  const payload = (id: number) => {
    return {
      id: items[id].album.id,
      tag: items[id].album.name,
      type: "album",
      image: items[id].album.images[0].url,
      url: `/album/${items[id].album.id}`,
    };
  };

  return (
    <S.StyledLibraryContainer>
      <h1>Albums</h1>
      <SFollow.ArtistCards height="auto">
        {items?.map((album, index) => (
          <Link
            href={{
              pathname: "/album/[pid]",
              query: { pid: album?.album.id },
            }}
            passHref
            key={album.album.id}
          >
            <SAlbums.AlbumRedirect
              onClick={() => handleMiddleClick(payload(index))}
            >
              <UserImage
                url={album.album && album.album.images[0].url}
                displayName={album.album.name}
                size={170}
                bradius={10}
                name="albumout"
              />
              <SPlaylist.PlaylistTitle>
                {album.album.name.length > 20
                  ? `${album.album.name.slice(0, 20).trim()}...`
                  : album.album.name.slice(0, 20)}
              </SPlaylist.PlaylistTitle>
              <SPlaylist.PlaylistAuthor>
                {album.album.release_date.slice(0, 4)}
              </SPlaylist.PlaylistAuthor>
            </SAlbums.AlbumRedirect>
          </Link>
        ))}
      </SFollow.ArtistCards>
    </S.StyledLibraryContainer>
  );
};

export default Albums;
