import { FC, useEffect, useMemo, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import * as S from '../../styles/components/layout/layout.style'
import ButtonUser from '../toProfileButton/toProfileButton'
import { IProps } from './types'
import { useRouter, withRouter } from 'next/router'
import dynamic from 'next/dynamic'

const Layout: FC<IProps> = ({ children, router }) => {
    const invalidPages = ['/', '/login/login']
    const routerPages = useRouter()

    const [path, setPath] = useState('')

    const LeftIcon = useMemo(
        () => dynamic(() => import('../../../public/routerPage/left.svg')),
        []
    )
    const RightIcon = useMemo(
        () => dynamic(() => import('../../../public/routerPage/right.svg')),
        []
    )

    // useEffect(() => {
    //     if (router.pathname === localStorage.getItem('path')) return

    //     localStorage.setItem('path', router.pathname)
    //     // setPath(router.pathname)
    // }, [router.pathname])
    // useEffect(() => {}, [])

    console.log(router)

    return (
        <S.AppMain>
            {!invalidPages.includes(router?.pathname) && <NavBar />}
            <S.AppBodyBox>
                {!invalidPages.includes(router?.pathname) && (
                    <S.RouterBack>
                        <S.RouterBtn onClick={() => routerPages.back()}>
                            <LeftIcon />
                        </S.RouterBtn>
                        {/* <S.RouterBtn onClick={() => routerPages.push()}>
                            <RightIcon />
                        </S.RouterBtn> */}
                    </S.RouterBack>
                )}

                {children}
            </S.AppBodyBox>
            {!invalidPages.includes(router?.pathname) && <ButtonUser />}
        </S.AppMain>
    )
}

export default Layout
