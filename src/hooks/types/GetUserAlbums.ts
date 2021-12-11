type Images = {
    height: number
    url: string
    width: number
}
type AlbumCopyright = {
    text: string
    type: string
}

type ArtistAlbum = {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
}

type Albums = {
    added_at: string
    album: {
        album_type: string
        artists: ArtistAlbum[]
        available_markets: string[]
        copyrights: AlbumCopyright[]
        external_ids: { upc: string }
        external_urls: { spotify: string }
        genres: string[]
        href: string
        id: string
        images: Images[]
        label: string
        name: string
        popularity: number
        release_date: string
        release_date_precision: string
        total_tracks: number
        tracks: {
            href: string
            items: {
                artists: ArtistAlbum[]
                available_markets: string[]
                disc_number: number
                duration_ms: number
                explicit: boolean
                external_urls: { spotify: string }
                href: string
                id: string
                is_local: boolean
                name: string
                preview_url: string
                track_number: number
                type: string
                uri: string
            }[]
            limit: number
            next: string
            offset: number
            previous: string
            total: number
        }
        type: string
        uri: string
    }
}

type GetUserAlbums = {
    href: string
    items: Albums[]
    limit: number
    next: string
    offset: number
    previous: string
    total: number
}
export default GetUserAlbums
