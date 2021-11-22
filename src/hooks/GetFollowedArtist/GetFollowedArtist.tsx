import axios from 'axios';
import { useEffect, useState } from 'react';
// import { IDataUser } from './types';

interface Artist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | undefined;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface IFollowedArtist {
  artists: {
    href: string;
    items: Artist[];
    limit: number;
    next: string;
    cursors: {
      after: string;
    };
    total: number;
  };
}
const GetFollowedArtists = (url: string) => {
  const [data, setData] = useState<IFollowedArtist>({} as IFollowedArtist);
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

export default GetFollowedArtists;
