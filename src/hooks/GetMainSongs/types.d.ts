interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Images {
  height: number;
  url: string;
  width: number;
}
export interface SongItem {
  album: {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Images[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Song {
  items: SongItem[];
}

/*
 {
      album: {
        album_type: string,
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM'
            },
            href: 'https://api.spotify.com/v1/artists/1z4g3DjTBBZKhvAroFlhOM',
            id: '1z4g3DjTBBZKhvAroFlhOM',
            name: 'Red Velvet',
            type: 'artist',
            uri: 'spotify:artist:1z4g3DjTBBZKhvAroFlhOM'
          }
        ],
        available_markets: [
          'AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH',
          'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY',
          'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
          'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN',
          'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO',
          'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA',
          'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ',
          'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
          'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH',
          'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6Pe5LGQgU3mmvuRjFMsACV'
        },
        href: 'https://api.spotify.com/v1/albums/6Pe5LGQgU3mmvuRjFMsACV',
        id: '6Pe5LGQgU3mmvuRjFMsACV',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273830de2e836036f181df598d0',
            width: 640
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02830de2e836036f181df598d0',
            width: 300
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851830de2e836036f181df598d0',
            width: 64
          }
        ],
        name: 'Queendom - The 6th Mini Album',
        release_date: '2021-08-16',
        release_date_precision: 'day',
        total_tracks: 6,
        type: 'album',
        uri: 'spotify:album:6Pe5LGQgU3mmvuRjFMsACV'
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM'
          },
          href: 'https://api.spotify.com/v1/artists/1z4g3DjTBBZKhvAroFlhOM',
          id: '1z4g3DjTBBZKhvAroFlhOM',
          name: 'Red Velvet',
          type: 'artist',
          uri: 'spotify:artist:1z4g3DjTBBZKhvAroFlhOM'
        }
      ],
      available_markets: [
        'AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH',
        'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY',
        'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
        'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN',
        'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO',
        'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA',
        'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ',
        'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
        'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH',
        'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'
      ],
      disc_number: 1,
      duration_ms: 181760,
      explicit: false,
      external_ids: { isrc: 'KRA302100268' },
      external_urls: {
        spotify: 'https://open.spotify.com/track/6SpPr7K4YQ2wp8jU6uOTmQ'
      },
      href: 'https://api.spotify.com/v1/tracks/6SpPr7K4YQ2wp8jU6uOTmQ',
      id: '6SpPr7K4YQ2wp8jU6uOTmQ',
      is_local: false,
      name: 'Queendom',
      popularity: 77,
      preview_url: 'https://p.scdn.co/mp3-preview/0bf35697a14394241c658adc758b9197543bc569?cid=ef1e9113db674947a2ab0b18230a8ea6',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:6SpPr7K4YQ2wp8jU6uOTmQ'
    },*/
