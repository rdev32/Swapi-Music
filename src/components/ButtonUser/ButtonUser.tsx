import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
import GetUsersProfile from '../../hooks/GetUsersProfile/GetUsersProfile';
import { IDataUser } from '../../hooks/GetUsersProfile/types';
import useActiveOptContext from '../../hooks/useActiveOptContext/useActiveOptContext';

const UserImg = styled(Image)`
  border-radius: 50%;
`;
const UserButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 80px;
  width: 80px;
  position: fixed;
  right: 0;
`;

const ButtonUser: FC = () => {
  const [data, setData] = useState<IDataUser>({} as IDataUser);
  const { setActive } = useContext(useActiveOptContext);
  const router = useRouter();

  const handleViewUser = () => {
    Object.keys(data).length !== 0 &&
      router.push({
        pathname: '/user/[pid]',
        query: { pid: data.id },
      }),
      setActive('/user/[pid]');
  };

  const userData = GetUsersProfile(`https://api.spotify.com/v1/me`);
  useEffect(() => {
    Object.keys(userData).length !== 0 && setData(userData);
  }, [userData]);
  return (
    <UserButton type="button" onClick={handleViewUser}>
      {data?.images?.map((img) => (
        <UserImg
          key={img.url}
          src={img.url}
          alt={data?.display_name}
          width={80}
          height={80}
        />
      ))}
    </UserButton>
  );
};

export default ButtonUser;
