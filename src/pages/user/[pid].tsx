import { FC } from 'react';
import { domain } from '../../assets/spotify';
import Following from '../../components/Spotify/Following/Following';
import UserImage from '../../components/Spotify/UserImage/UserImage';
import GetUsersProfile from '../../hooks/GetUsersProfile/GetUsersProfile';
import * as S from '../../styles/pages/user/user.style';

const User: FC = () => {
  const data = GetUsersProfile(domain);

  return (
    <S.UserBody>
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
      <Following />
    </S.UserBody>
  );
};

export default User;
