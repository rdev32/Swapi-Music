import axios from 'axios';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
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
`;
interface IDataImgUser {
  url: string;
  height: number;
  width: number;
}

interface IDataUser {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: IDataImgUser[];
  type: string;
  uri: string;
}
interface IProps {}

const ButtonUser: FC<IProps> = (props) => {
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

  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  }, []);
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
