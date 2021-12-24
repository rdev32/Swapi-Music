import { NextPage } from "next";
import { useContext } from "react";
import UserFollowing from "../../components/User/UserFollowing";
import UserHeader from "../../components/User/UserHeader";
import UserPublicPlaylist from "../../components/User/UserPublicPlaylist";
import UserArtists from "../../components/User/UserTopArtists";
import UserTopSongs from "../../components/User/UserTopSongs";
import UserContext from "../../hooks/UserContext/UserContext";
import * as S from "../../styles/general/styles";

const User: NextPage = () => {
  const { playlists } = useContext(UserContext);
  // const [scroll] = useScroll({ ref: { current: {} }, data: {} });
  return (
    <>
      {/* <NavBarScroll title={user && user.display_name}  scroll={scroll}/> */}

      <S.StyledContainer>
        <UserHeader />
        <UserArtists />
        <UserPublicPlaylist title="Public Playlists" data={playlists} />
        <UserTopSongs />
        <UserFollowing />
      </S.StyledContainer>
    </>
  );
};

export default User;
