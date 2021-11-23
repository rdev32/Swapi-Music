import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { domain } from '../../assets/spotify';
import GetUsersProfile from '../../hooks/GetUsersProfile/GetUsersProfile';
import { IDataUser } from '../../hooks/GetUsersProfile/types';
import * as S from '../../styles/components/ToUserPage/ToUserPage.style';

const ButtonUser: FC = () => {
  const [data, setData] = useState<IDataUser>({} as IDataUser);

  const userData = GetUsersProfile(domain);
  useEffect(() => {
    Object.keys(userData).length !== 0 && setData(userData);
  }, [userData]);

  return (
    <Link
      href={{
        pathname: '/user/[pid]',
        query: { pid: data.id },
      }}
      passHref
    >
      <S.UserPage>
        {data?.images?.map((img) => (
          <S.UserImg
            key={img.url}
            src={img.url}
            alt={data?.display_name}
            width={50}
            height={50}
          />
        ))}
      </S.UserPage>
    </Link>
  );
};

export default ButtonUser;
