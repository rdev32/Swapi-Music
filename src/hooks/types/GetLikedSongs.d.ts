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
