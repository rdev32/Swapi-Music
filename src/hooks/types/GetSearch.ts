type IImages = {
    height: number
    url: string
    width: number
}

type IArtist = {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
}

type IAlbums = {
    album_type: string
    artists: IArtist[]
    available_markets: string[]
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: IImages[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

type IArtists = {
    external_urls: {
        spotify: string
    }
    followers: {
        href: null
        total: number
    }
    genres: string[]
    href: string
    id: string
    images: IImages[]
    name: string
    popularity: number
    type: string
    uri: string
}

type IShow = {
    available_markets: string[]
    copyrights: string[]
    description: string
    explicit: boolean
    external_urls: {
        spotify: string
    }
    href: string
    html_description: string
    id: string
    images: IImages[]
    is_externally_hosted: boolean
    languages: string[]
    media_type: string
    name: string
    publisher: string
    type: string
    uri: string
}

type ITracks = {
    album: IAlbums
    artists: IArtist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_urls: {
        spotify: string
    }
    external_ids: {
        isrc: string
    }
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: null
    track_number: number
    type: string
    uri: string
}
export type IPlaylist = {
    collaborative: boolean
    description: string
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: IImages[]
    name: string
    owner: {
        display_name: string
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
    }
    primary_color: null
    public: boolean
    snapshot_id: string
    tracks: {
        href: string
        total: number
    }
    type: string
    uri: string
}
type Episodes = {
    audio_preview_url: string
    description: string
    duration_ms: number
    explicit: boolean
    external_urls: {
        spotify: string
    }
    href: string
    html_description: string
    id: string
    images: IImages[]
    is_externally_hosted: boolean
    is_playable: boolean
    language: string
    languages: string[]
    name: string
    release_date: string
    release_date_precision: string
    type: string
    uri: string
}

type GeneralTypes<T> = {
    href: string
    limit: number
    next: string
    items: T[]
    offset: number
    previous: null | any
    total: number
}

export type IGetSearch = {
    albums: GeneralTypes<IAlbums>
    artists: GeneralTypes<IArtists>
    playlists: GeneralTypes<IPlaylist>
    episodes: GeneralTypes<Episodes>
    tracks: GeneralTypes<ITracks>
    shows: GeneralTypes<IShow>
}
