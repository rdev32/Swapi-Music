import { NextPage } from "next";
import { useRouter } from "next/router";
import Albums from "../../components/discography/albums";
import NavBarScroll from "../../components/NavBar/components/NavBarScroll/NavBarScroll";
import validPid from "../../helpers/pages/artist/ValidPid";
import GetData from "../../hooks/GetData/GetData";
import { Artist } from "../../hooks/types/GetAlbum";
import { AlbumArtist } from "../../hooks/types/GetArtistAlbum";
import useScroll from "../../hooks/useScroll/useScroll";
import * as S from "../../styles/pages/User/UserHeader.style";

const Discography: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const urlArtist = `https://api.spotify.com/v1/artists/${pid}`;
  const urlAlbums = `https://api.spotify.com/v1/artists/${pid}/albums`;

  const { name } = GetData<Artist>(validPid(urlArtist, pid));
  const { items } = GetData<AlbumArtist>(validPid(urlAlbums, pid));
  const [scroll] = useScroll({ ref: { current: {} }, data: {} });
  return (
    <>
      <NavBarScroll title={name && name} scroll={scroll} />
      <S.UserBody>
        <h1> {name}</h1>
        {items?.map((item) => (
          <Albums key={item.id} album={item} />
        ))}
      </S.UserBody>
    </>
  );
};

export default Discography;
