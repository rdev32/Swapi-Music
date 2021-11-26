import { IArtist } from './GetTopSongs'

interface IImages {
    url: string
    width: number
    height: number
}

interface ICopyright {
    text: string
    type: string
}

interface Artist {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export interface Album {
    album_type: string
    artists: Artist[]
    available_markets: string[]
    copyright: ICopyright[]
    external_ids: {
        upc: string
    }
    external_urls: {
        spotify: string
    }
    genres: string[]
    href: string
    id: string
    images: IImages[]
    label: string
    name: string
    popularity: number
    release_date: string
    release_date_precision: string
    tracks: {
        items: IArtist[]
        href: string
        total: number
    }
    type: string
    uri: string
}
