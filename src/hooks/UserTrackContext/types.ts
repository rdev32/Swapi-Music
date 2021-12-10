import { LikedArtistSongs } from '../types/GetLikedSongs'

export type TrackId = {
    id: string
    position: number
    trackname: string
    artist: LikedArtistSongs[]
    album: {
        name: string
        id: string
    }
    duration_ms: number
    images: string
}
export type Tracks = {
    position: number
    from?: {
        name?: string
        id?: string | undefined
        type?: string
    }
    tracks: TrackId[]
    aleatory?: number
}
