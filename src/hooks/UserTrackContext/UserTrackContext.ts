import { createContext, Dispatch, SetStateAction } from 'react'

type TrackId = {
    id: string
}
type Tracks = {
    position: number
    tracks: TrackId[]
}
interface IProps {
    tracks: Tracks
    setTracks: Dispatch<SetStateAction<Tracks>>
}

const UserTrackContext = createContext<IProps>({} as IProps)

export default UserTrackContext
