import { createContext } from 'react'
import { User } from '../types/GetUserProfile'

interface IProps {
    user: User
}

const UserContext = createContext<IProps>({} as IProps)

export default UserContext
