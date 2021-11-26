export type images = {
    height: number
    url: string
    width: number
}

type artist = {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
}
export interface Itracks {
    href: string
    items: GetTrackPlaylistId[]
    total: number
    limit: number
    offset: number
    previous: null
}
export type IOwner = {
    display_name: string
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
}
type GetTrackPlaylistId = {
    added_at: string
    added_by: {
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
    }
    is_local: boolean
    primary_color: null
    track: {
        album: {
            album_type: string
            artists: artist[]
            available_markets: string[]
            external_urls: {
                spotify: string
            }
            href: string
            id: string
            images: images[]
            name: string
            release_date: string
            release_date_precision: string
            total_tracks: number
            type: string
            uri: string
        }
        artists: artist[]
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
    video_thumbnail: {
        url: null
    }
}

export type Imgs = {
    height: number
    width: number
    url: string
}

export type GetPlaylistId = {
    collabborative: boolean
    description: string
    external_urls: {
        spotify: string
    }
    followers: {
        href: null
        total: number
    }
    href: string
    id: string
    images: images[]
    name: string
    owner: owner
    public: boolean
    snapshot_id: string
    tracks: tracks
    type: string
    uri: string
}
