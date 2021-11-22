import { FC, useEffect, useState } from 'react';
import UserImage from '../../components/Spotify/UserImage/UserImage';
import GetFollowedArtists from '../../hooks/GetFollowedArtist/GetFollowedArtist';
import GetUsersProfile from '../../hooks/GetUsersProfile/GetUsersProfile';
import { IDataUser } from '../../hooks/GetUsersProfile/types';
import * as S from '../../styles/pages/user/user.style';
interface IProps {}

const User: FC<IProps> = (props) => {
  const [data, setData] = useState<IDataUser>({} as IDataUser);

  const userData = GetUsersProfile(`https://api.spotify.com/v1/me`);
  const { artists } = GetFollowedArtists(
    'https://api.spotify.com/v1/me/following?type=artist'
  );
  console.log(artists);

  useEffect(() => {
    Object.keys(userData).length !== 0 && setData(userData);
  }, [userData]);

  return (
    <>
      <S.UserStyle>
        <div>
          {data?.images?.map((img) => (
            <UserImage
              key={img.url}
              url={img.url}
              bradius={50}
              displayName={data.display_name}
            />
          ))}
        </div>
        <div>
          <p>Profile</p>
          <h1>{data?.display_name}</h1>
          <p>{data?.followers?.total} Followers</p>
        </div>
      </S.UserStyle>
      <div>
        <h2>Following</h2>
        <div>
          {artists?.items.map((artist) => (
            <div key={artist.id}>
              <p>{artist.name}</p>
              <div>
                <UserImage
                  key={artist.images[0].url}
                  url={artist.images[0].url}
                  bradius={50}
                  displayName={artist.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
