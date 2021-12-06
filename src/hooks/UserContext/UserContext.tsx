import { createContext } from 'react'
import { GetPlaylist } from '../types/GetCurrentUserPlaylist'
import { User } from '../types/GetUserProfile'

interface IProps {
    user: User
    playlists?: GetPlaylist[]
}

const UserContext = createContext<IProps>({} as IProps)

export default UserContext
