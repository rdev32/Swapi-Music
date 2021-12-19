import { FC } from "react";
import * as S from "../../../styles/general/styles";
import GetData from "../../../hooks/GetData/GetData";
import { Artist } from "../../../hooks/types/GetTopArtist";
import * as SFollowing from "../../../styles/components/User/Following.style";
import ArtistCard from "../../../components/Artist/Artist";

const Following: FC = () => {
  const { artists } = GetData<{
    artists: { items: Artist[]; total: number };
  }>("https://api.spotify.com/v1/me/following?type=artist&limit=50");

  return (
    <S.StyledContainer>
      <h1>Following</h1>
      <SFollowing.ArtistCards height="auto">
        {artists?.items?.map((artist) => (
          <ArtistCard item={artist} key={artist.id} />
        ))}
      </SFollowing.ArtistCards>
    </S.StyledContainer>
  );
};

export default Following;
