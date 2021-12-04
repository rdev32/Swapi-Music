import Link from 'next/link'
import { FC } from 'react'
import {
    baseUrl,
    clientId,
    getMode,
    ScopesUrlParams,
} from '../../assets/swagger'
import * as S from '../../styles/pages/auth/login.style'

interface IProps {
    button: string
}
const Buttons: FC<IProps> = ({ button }) => {
    const url_redirect = `${baseUrl}?client_id=${clientId}&redirect_uri=${getMode(
        true
    )}&scope=${ScopesUrlParams}&response_type=token&show_dialog=true`
    return (
        <Link
            href={
                button === 'Login'
                    ? url_redirect
                    : 'https://www.spotify.com/gt/'
            }
            key={button}
            passHref
        >
            <S.Buttons signup={button === 'Sign Up' ? true : false}>
                {button}
            </S.Buttons>
        </Link>
    )
}

export default Buttons
