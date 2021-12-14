import { createContext, Dispatch, SetStateAction } from 'react'
import { Tracks } from '../../hooks/UserTrackContext/types'
import { GetPlaylist } from '../types/GetCurrentUserPlaylist'
import { User } from '../types/GetUserProfile'

export type HomeRecent = {
    id: string
    tag: string
    type: string
    image: string
    url: string
}

interface IProps {
    tracks: Tracks
    user: User
    playlists?: GetPlaylist[]
    setTracks: Dispatch<SetStateAction<Tracks>>
    recent: HomeRecent[]
    setRecent: Dispatch<HomeRecent[]>
}

const UserContext = createContext<IProps>({} as IProps)

export default UserContext
