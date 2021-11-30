import { createContext, Dispatch, SetStateAction } from 'react'

interface IProps {
    idTrack: string
    setIdTrack: Dispatch<SetStateAction<string>>
}

const UserTrackContext = createContext<IProps>({} as IProps)

export default UserTrackContext
