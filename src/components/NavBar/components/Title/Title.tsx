import { FC } from 'react'
import Image from 'next/image'
import * as S from '../../../../styles/components/NavBar/components/Title/Title.S'
import Link from 'next/link'
interface IProps {}

const Title: FC<IProps> = (props) => {
    return (
        <S.ItemBox>
            <Image
                src="/icons/NavBar/swagger.svg"
                alt="SwaggerMusicIcon"
                width={25}
                height={25}
            />
            <Link href="/" passHref>
                <S.ItemT>
                    <p>Swapi</p>
                </S.ItemT>
            </Link>
        </S.ItemBox>
    )
}

export default Title
