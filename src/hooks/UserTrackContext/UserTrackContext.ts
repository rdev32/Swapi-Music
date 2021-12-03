import { createContext, Dispatch, SetStateAction } from 'react'
import { Tracks } from './types'

interface IProps {
    tracks: Tracks
    setTracks: Dispatch<SetStateAction<Tracks>>
}

const UserTrackContext = createContext<IProps>({} as IProps)

export default UserTrackContext
