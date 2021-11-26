type ImagesLikedSongs = {
    height: number
    url: string
    width: number
}

type LikedArtistSongs = {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export type LikedSongs = {
    added_at: string
    track: {
        album: {
            album_type: string
            artists: LikedArtistSongs[]
            available_markets: string[]
            external_urls: {
                spotify: string
            }
            href: string
            id: string
            images: ImagesLikedSongs[]
            name: string
            release_date: string
            release_date_precision: string
            total_tracks: number
            type: string
            uri: string
        }
        artists: LikedArtistSongs[]
        available_markets: string[]
        disc_number: number
        duration_ms: number
        explicit: boolean
        external_ids: {
            isrc: string
        }
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        is_local: boolean
        name: string
        popularity: number
        preview_url: string
        track_number: number
        type: string
        uri: string
    }
}

export type GetLikedSongs = {
    href: string
    items: LikedSongs[]
    limit: number
    next: string
    offset: number
    previous: string
    total: number
}
/*

            artists: LikedArtistSongs[]
            available_markets: string[];
            external_urls: {
                spotify: string;
            }
            href: string;
            id: string;
            images: ImagesLikedSongs[];
            name: string;
            release_date: string;
            release_date_precision: string;
            total_tracks: number;
            type: string;
            uri: string;
    {
      "added_at": "2021-11-25T03:14:38Z",
      "track": {
        "album": {
      
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"
            },
            "href": "https://api.spotify.com/v1/artists/04gDigrS5kc9YWfZHwBETP",
            "id": "04gDigrS5kc9YWfZHwBETP",
            "name": "Maroon 5",
            "type": "artist",
            "uri": "spotify:artist:04gDigrS5kc9YWfZHwBETP"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "GA",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RU",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        "disc_number": 1,
        "duration_ms": 207080,
        "explicit": false,
        "external_ids": {
          "isrc": "USJAY0500789"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6R1L7XoVK27F0heZe1yvfO"
        },
        "href": "https://api.spotify.com/v1/tracks/6R1L7XoVK27F0heZe1yvfO",
        "id": "6R1L7XoVK27F0heZe1yvfO",
        "is_local": false,
        "name": "Happy Christmas (War Is Over)",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/d377b1433b91bad7b44aa1fb5feef8b188007405?cid=ef1e9113db674947a2ab0b18230a8ea6",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6R1L7XoVK27F0heZe1yvfO"
      }
    },*/
