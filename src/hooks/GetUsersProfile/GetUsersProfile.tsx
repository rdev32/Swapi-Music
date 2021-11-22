import axios from 'axios';
import { useEffect, useState } from 'react';
import { IDataUser } from './types';

const GetUsersProfile = (url: string) => {
  const [data, setData] = useState<IDataUser>({} as IDataUser);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  }, []);
  return data;
};

export default GetUsersProfile;
