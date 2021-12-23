import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AlbumArtist from "../../components/Albums/AlbumsArtist";
import Song from "../../components/Spotify/Album/components/Songs/Song";
import UserImage from "../../components/Spotify/UserImage/UserImage";
import validPid from "../../helpers/pages/artist/ValidPid";
import GetData from "../../hooks/GetData/GetData";
import GetTimeSongs from "../../hooks/GetTimeSongs/GetTimeSongs";
import { Album } from "../../hooks/types/GetAlbum";
import UserContext from "../../hooks/UserContext/UserContext";
import * as SPlaylist from "../../styles/components/playlist/header.style";
import * as SMSong from "../../styles/components/Spotify/MainSongs/Main.style";
import * as S from "../../styles/pages/album/album.style";

const Album: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { setTracks } = useContext(UserContext);
  const urlAlbumsTracks = `https://api.spotify.com/v1/albums/${pid}`;

  const {
    images,
    name,
    artists,
    tracks,
    type,
    id: idFrom,
    release_date,
    label,
  } = GetData<Album>(validPid(urlAlbumsTracks, pid));
  const ms = tracks?.items?.reduce(
    (acc, curr) => (acc = acc + curr.duration_ms),
    0
  );

  const [hour, minutes, seconds] = GetTimeSongs({ ms: ms });

  const newTracks = tracks?.items?.map((item, index) => {
    return {
      id: item.id,
      position: index,
      trackname: item.name,
      artist: item.artists,
      album: {
        id: idFrom,
        name,
        type,
      },
      duration_ms: item.duration_ms,
      images: images[2]?.url,
    };
  });
  const handlePlayId = (id: number) => {
    setTracks({
      tracks: newTracks,
      position: id,
      from: {
        name,
        id: idFrom,
        type,
      },
    });
  };

  return (
    <S.AlbumStyle>
      <S.AlbumHeader>
        <div>
          <UserImage
            key={images && images[0]?.url}
            url={images && images[0]?.url}
            bradius={10}
            size={220}
            name="albumout"
          />
        </div>
        <S.AlbumContent>
          <h5>{type?.toUpperCase()}</h5>
          <S.albumTitle>{name}</S.albumTitle>
          <SPlaylist.PlaylistHeaderDetails>
            <Link
              href={{
                pathname: "/artist/[pid]",
                query: { pid: artists && artists[0].id },
              }}
              passHref
            >
              <a>{artists && artists[0].name}</a>
            </Link>
            <p>
              {tracks?.total > 0 ? (
                <>
                  <SPlaylist.PlayListSeparator> • </SPlaylist.PlayListSeparator>
                  {tracks?.total} Songs,{" "}
                  {hour ? `${hour} Hrs ${minutes}Min` : ""}{" "}
                  {!hour ? `${minutes} Min ${Math.round(seconds) > 5 ? `${Math.round(seconds)} Sec` : ""} ` : ""}
                </>
              ) : (
                ""
              )}
            </p>
          </SPlaylist.PlaylistHeaderDetails>
        </S.AlbumContent>
      </S.AlbumHeader>
      {tracks?.items && <hr />}
      <S.AlbumAside>
        {tracks?.items?.map((song, index) => (
          <SMSong.SongCard key={song.id}>
            <Song
              song={song}
              index={index}
              handleId={() => handlePlayId(index)}
            />
          </SMSong.SongCard>
        ))}
      </S.AlbumAside>
      <footer>
        <S.albumLabel>
          {release_date && release_date.slice(0, 4)} {label && label}
        </S.albumLabel>
      </footer>
      <AlbumArtist artists={artists} />
    </S.AlbumStyle>
  );
};

export default Album;
