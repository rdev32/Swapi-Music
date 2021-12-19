import Link from "next/link";
import { FC } from "react";
import { domain } from "../../assets/spotify";
import GetData from "../../hooks/GetData/GetData";
import { IFollowedArtist } from "../../hooks/types/GetFollowedArts";
import * as S from "../../styles/components/User/Following.style";
import ArtistCard from "../Artist/Artist";

const UserFollowing: FC = () => {
  const { artists } = GetData<IFollowedArtist>(
    `${domain}/following?type=artist&limit=10`
  );
  return (
    <S.BoxStyle>
      <S.UserFollowingHeader>
        <h2>Following</h2>
        <Link href="/user/following" passHref>
          <a>See all</a>
        </Link>
      </S.UserFollowingHeader>
      <S.ArtistCards>
        {artists?.items.map((artist) => (
          <ArtistCard key={artist.id} item={artist} />
        ))}
      </S.ArtistCards>
    </S.BoxStyle>
  );
};

export default UserFollowing;
