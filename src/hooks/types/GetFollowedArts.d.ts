interface Artist {
    external_urls: {
        spotify: string
    }
    followers: {
        href: string | undefined
        total: number
    }
    genres: string[]
    href: string
    id: string
    images: {
        height: number
        url: string
        width: number
    }[]
    name: string
    popularity: number
    type: string
    uri: string
}

export interface IFollowedArtist {
    artists: {
        href: string
        items: Artist[]
        limit: number
        next: string
        cursors: {
            after: string
        }
        total: number
    }
}
