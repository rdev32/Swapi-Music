import { FC, useMemo } from 'react'
import Image from 'next/image'
import * as S from '../../../../styles/components/NavBar/components/Title/Title.S'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const NavBarHeader: FC = () => {
    const DynamicIcon = useMemo(
        () =>
            dynamic(
                () => import(`../../../../../public/icons/NavBar/swagger.svg`)
            ),
        []
    )
    return (
        <S.ItemBox>
            <DynamicIcon />
            <Link href="/" passHref>
                <S.ItemT>
                    <h1>Swapi</h1>
                </S.ItemT>
            </Link>
        </S.ItemBox>
    )
}

export default NavBarHeader
