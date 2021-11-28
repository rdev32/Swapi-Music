import { FC, useContext, useEffect, useMemo, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import * as S from '../../styles/components/layout/layout.style'
import ButtonUser from '../toProfileButton/toProfileButton'
import { IProps } from './types'
import { useRouter, withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import useActiveOptContext from '../../hooks/useActiveOptContext/useActiveOptContext'

const Layout: FC<IProps> = ({ children, router }) => {
    const invalidPages = ['/', '/login/login']
    const routerPages = useRouter()
    const [path, setPath] = useState<string[]>([])
    const { active, setActive } = useContext(useActiveOptContext)

    const LeftIcon = useMemo(
        () => dynamic(() => import('../../../public/routerPage/left.svg')),
        []
    )
    const RightIcon = useMemo(
        () => dynamic(() => import('../../../public/routerPage/right.svg')),
        []
    )

    useEffect(() => {
        setPath([...path, routerPages.asPath])
    }, [routerPages.asPath])
    console.log(path)

    console.log(routerPages.route.slice(1, 99999999999))

    return (
        <S.AppMain>
            {!invalidPages.includes(router?.pathname) && <NavBar />}
            <S.AppBodyBox>
                {!invalidPages.includes(router?.pathname) && (
                    <S.RouterBack>
                        {/* <S.RouterBtn
                            onClick={() => {
                                routerPages.back()
                                setActive(
                                    routerPages.route.slice(1, 99999999999)
                                )
                            }}
                        >
                            <LeftIcon />
                        </S.RouterBtn>
                        <S.RouterBtn
                            onClick={() => {
                                routerPages.push(path[path.length - 2])
                                // routerPages.as(path[path.length - 2])
                                setActive(
                                    routerPages.route.slice(1, 99999999999)
                                )
                            }}
                        >
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
