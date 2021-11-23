import { FC } from 'react';
import UserImage from '../../../components/Spotify/UserImage/UserImage';
import GetFollowedArtists from '../../../hooks/GetFollowedArtist/GetFollowedArtist';
import { domain } from '../../../assets/spotify';
import * as S from '../../../styles/components/Spotify/Following/Following.style';
interface IProps {}

const Following: FC<IProps> = () => {
  const { artists } = GetFollowedArtists(
    `${domain}/following?type=artist&limit=10`
  );

  return (
    <div>
      <h2>Following</h2>
      <S.ArtistCards>
        {artists?.items.map((artist) => (
          <S.ArtistCard key={artist.id}>
            <UserImage
              key={artist.images[0].url}
              url={artist.images[0].url}
              bradius={50}
              displayName={artist.name}
              size={160}
            />
            <S.ArtistName>{artist.name}</S.ArtistName>
            <S.ArtistTag>Artist</S.ArtistTag>
          </S.ArtistCard>
        ))}
      </S.ArtistCards>
    </div>
  );
};

export default Following;
