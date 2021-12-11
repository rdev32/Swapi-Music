import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import * as S from '../../../../styles/components/NavBar/components/Title/Title.S'
import * as SSlogin from '../../../../styles/pages/auth/login.style'

const NavBarHeader: FC = () => {
    const Icon = useMemo(
        () => dynamic(() => import(`../../../../../public/landing/swapi.svg`)),
        []
    )

    return (
        <S.ItemBox>
            <Link href="/" passHref>
                <S.ItemT>
                    <SSlogin.LoginTitle>{<Icon />}Swapy</SSlogin.LoginTitle>
                </S.ItemT>
            </Link>
        </S.ItemBox>
    )
}

export default NavBarHeader
