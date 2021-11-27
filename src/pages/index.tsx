/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic'
import { FC, useMemo } from 'react'
import Buttons from '../components/Buttons/Buttons'
import * as S from '../styles/pages/auth/login.style'
import Image from 'next/image'
const Login: FC = () => {
    const DynamicIcon = useMemo(
        () => dynamic(() => import('../../public/icons/icon.svg')),
        []
    )
    const buttons = ['Login', 'Sign Up']
    return (
        <S.LoginBody>
            <S.NavBar>
                <S.LoginTitle>{<DynamicIcon />}Swapy</S.LoginTitle>
                <S.NavBarButtons signup={false}>
                    {buttons.map((button) => (
                        <Buttons key={button} {...{ button }} />
                    ))}
                </S.NavBarButtons>
            </S.NavBar>
            <S.Home>
                <div>
                    <S.LoginQuestion>
                        Listen to your <span>Dreams</span>
                    </S.LoginQuestion>
                    <S.NavBarPhrase>
                        Listen your music favorite with us, and take inspiration
                        with our music!
                    </S.NavBarPhrase>
                    <S.NavBarButtons signup>
                        {buttons.map((button) => (
                            <Buttons key={button} {...{ button }} />
                        ))}
                    </S.NavBarButtons>
                </div>
                <div>
                    <Image
                        src={'/landing/headset.png'}
                        width={330}
                        height={326}
                        priority
                    />
                </div>
            </S.Home>
            <S.Foot>
                <Image
                    src={'/landing/me.png'}
                    width={100}
                    height={100}
                    priority
                />
                <p>Whil Inc.</p>
            </S.Foot>
        </S.LoginBody>
    )
}

export default Login
