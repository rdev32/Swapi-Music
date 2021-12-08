/* eslint-disable jsx-a11y/alt-text */
import { getCsrfToken, getProviders, getSession, signIn } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useMemo } from 'react'
import * as S from '../styles/pages/auth/login.style'
import Buttons from '../components/Buttons/Buttons'

const Login: FC<any> = ({ providers }) => {
    const DynamicIcon = useMemo(
        () => dynamic(() => import('../../public/icons/icon.svg')),
        []
    )
    const buttons = ['Login', 'Sign Up']
    // console.log(session)

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
                        {/* {buttons.map((button) => (
                            <Buttons key={button} {...{ button }} />
                        ))} */}
                        <S.Buttons
                            key={providers?.spotify?.id}
                            onClick={() =>
                                signIn(providers?.spotify.id, {
                                    callbackUrl: '/Home',
                                })
                            }
                        >
                            {providers?.spotify?.name}
                        </S.Buttons>
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

export async function getServerSideProps() {
    const providers = await getProviders()
    const csrfToken = await getCsrfToken()
    const session = await getSession()

    return {
        props: {
            providers,
            csrfToken,
            session,
        },
    }
}
