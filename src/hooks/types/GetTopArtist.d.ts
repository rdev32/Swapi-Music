interface ArtistImages {
    height: number
    url: string
    width: number
}

export interface Artist {
    external_urls: {
        spotify: string
    }
    followers: {
        href: string | null
        total: number
    }
    genres: string[]
    href: string
    id: string
    images: ArtistImages[]
    name: string
    popularity: number
    type: string
    uri: string
}

export interface Artists {
    items: Artist[]
}
