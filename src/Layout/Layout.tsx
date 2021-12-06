import { FC } from 'react'
import { domain } from '../assets/spotify'
import NavBar from '../components/NavBar/NavBar'
import * as S from '../styles/components/layout/layout.style'
import NavBarPlayer from '../components/NavBarPlayer/NavBarPlayer'
import UserIcon from '../components/userIcon/userIcon'
import { IProps } from './types'
import { User } from '../hooks/types/GetUserProfile'
import GetData from '../hooks/GetData/GetData'
import UserContext from '../hooks/UserContext/UserContext'

const Layout: FC<IProps> = ({ children, router }) => {
    const invalidPages = ['/', '/login/login']
    const user = GetData<User>(domain)
    return (
        <UserContext.Provider value={{ user }}>
            <S.AppMain>
                {!invalidPages.includes(router?.pathname) && <NavBar />}
                <S.AppBodyBox>
                    {children}
                    {!invalidPages.includes(router?.pathname) && (
                        <NavBarPlayer />
                    )}
                </S.AppBodyBox>
                {!invalidPages.includes(router?.pathname) && (
                    <UserIcon {...{ user }} />
                )}
            </S.AppMain>
        </UserContext.Provider>
    )
}

export default Layout
