/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

interface IProps {
  user: {
    username: string;

    password: string;
  };
  type: string;
}

export interface IUser {
  authentication?: string;
  token?: string;
  message?: string;
}

const UseAuth = (form: IProps) => {
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
    form?.user?.password && form?.user?.username && useFetch(form);
  }, [form.user, form.type]);
  return data;
};

export default UseAuth;
