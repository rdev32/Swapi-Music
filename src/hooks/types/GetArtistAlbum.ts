import { Artist, IImages } from "./GetAlbum";

export type Albums = {
  album_group: string;
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: IImages[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type AlbumArtist = {
  href: string;
  items: Albums[];
  limit: number;
  next: null | string;
  offset: number;
  previous: null | string;
  total: number;
};
