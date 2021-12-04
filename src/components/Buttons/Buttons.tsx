import { FC } from 'react'
import Link from 'next/link'
import * as S from '../../styles/pages/auth/login.style'

import {
    baseUrl,
    clientId,
    getMode,
    redirect,
    ScopesUrlParams,
} from '../../assets/swagger'

interface IProps {
    button: string
}
const Buttons: FC<IProps> = ({ button }) => {
    const url_redirect = `${baseUrl}?client_id=${clientId}&redirect_uri=${getMode(
        false
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
