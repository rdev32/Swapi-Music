/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

interface IProps {
  user: {
    username: string;

    password: string;
  };
  type: string;
}

interface IUser {
  authentication?: string;
  token?: string;
  message?: string;
}

const UseAuth = ({ user, type }: IProps) => {
  const [data, setData] = useState<IUser>({} as IUser);

  useEffect(() => {
    const useFetch = async ({ user, type }: IProps) => {
      const url = `https://gyphs.herokuapp.com/${type}`;
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await resp.json();
      setData(data);
    };
    user.password && user.username && useFetch({ user, type });
  }, [user, type]);
  return data;
};

export default UseAuth;
