import axios from 'axios';
import { useEffect, useState } from 'react';
import { Song } from './types';

const GetMainSongs = (url: string) => {
  const [data, setData] = useState<Song>({} as Song);
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

export default GetMainSongs;
