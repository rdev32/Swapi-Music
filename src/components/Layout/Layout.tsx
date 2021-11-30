import { FC } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import * as S from '../../styles/components/layout/layout.style'
import NavBarPlayer from '../NavBarPlayer/NavBarPlayer'
import ButtonUser from '../toProfileButton/toProfileButton'
import { IProps } from './types'

const Layout: FC<IProps> = ({ children, router }) => {
    const invalidPages = ['/', '/login/login']

    return (
        <S.AppMain>
            {!invalidPages.includes(router?.pathname) && <NavBar />}
            <S.AppBodyBox>
                {children}
                {!invalidPages.includes(router?.pathname) && <NavBarPlayer />}
            </S.AppBodyBox>
            {!invalidPages.includes(router?.pathname) && <ButtonUser />}
        </S.AppMain>
    )
}

export default Layout
