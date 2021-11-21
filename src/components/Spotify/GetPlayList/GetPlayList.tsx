import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface IProps {}

const GetPlayList: FC<IProps> = (props) => {
  const [token, setToken] = useState<string>('');
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token') || '');
    }
  }, []);

  const handleGetPlayList = () => {
    axios
      .get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  };

  console.log(data);

  return (
    <div>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
      <button onClick={handleGetPlayList}>Get PlayList</button>
    </div>
  );
};

export default GetPlayList;
