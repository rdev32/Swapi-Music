import Link from 'next/link'
import {
    baseUrl,
    clientId,
    getLocalMode,
    ScopesUrlParams,
} from '../../assets/swagger'
import * as S from '../../styles/pages/auth/login.style'
//FALSE DEPLOY
//TRUE DEV
const Buttons = ({ button }: { button: string }) => {
    const url_redirect = `${baseUrl}?client_id=${clientId}&redirect_uri=${getLocalMode(
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
            <S.Buttons>{button}</S.Buttons>
        </Link>
    )
}

export default Buttons
