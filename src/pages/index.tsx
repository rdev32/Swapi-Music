/* eslint-disable jsx-a11y/alt-text */
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useMemo } from 'react'
import Login from '../assets/Login.json'
import Buttons from '../components/Buttons/Buttons'
import * as S from '../styles/pages/auth/login.style'

const Index: NextPage = () => {
    const GetIcons = () => {
        const Icon = useMemo(
            () => dynamic(() => import('../../public/landing/swapi.svg')),
            []
        )
        if (Icon) {
            return <Icon />
        }
        return null
    }

    return (
        <S.LoginBody>
            <S.NavBar>
                <S.LoginTitle>{<GetIcons />}Swapy</S.LoginTitle>
                <S.NavBarButtons signup={false}>
                    {Login.filter((_, index) => index === 0).map((button) => (
                        <Buttons key={button} button={button} />
                    ))}
                </S.NavBarButtons>
            </S.NavBar>
            <S.Aside>
                <div>
                    <S.LoginQuestion>
                        Listen to your <span>Dreams</span>
                    </S.LoginQuestion>
                    <S.NavBarPhrase>
                        Listen your music favorite with us, and take inspiration
                        with our music!
                    </S.NavBarPhrase>
                    <S.NavBarButtons signup>
                        {Login.filter((_, index) => index === 1).map(
                            (button) => (
                                <Buttons key={button} button={button} />
                            )
                        )}
                    </S.NavBarButtons>
                </div>
                <div>
                    <Image
                        src={'/landing/headset.png'}
                        width={330}
                        height={326}
                    />
                </div>
            </S.Aside>
            <S.Footer>
                <a
                    href="https://github.com/Whil117"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image src={'/landing/me.png'} width={100} height={100} />
                </a>
            </S.Footer>
        </S.LoginBody>
    )
}

export default Index
