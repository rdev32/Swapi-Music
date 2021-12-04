/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import GetSalute from '../components/GetSalute/GetSalute'
import * as S from '../styles/pages/Home.style'

const Home = () => {
    const getTokenParams = (hash: string) => {
        const strHashTag = hash.substring(1)
        const paramsUrl = strHashTag.split('&')
        const paramsSplit = paramsUrl.reduce((acc: any, curr) => {
            const [key, value] = curr.split('=')
            acc[key] = value
            return acc
        }, {})
        return paramsSplit
    }

    useEffect(() => {
        if (window.location.hash) {
            const { access_token, token_type, expires_in } = getTokenParams(
                window.location.hash
            )

            localStorage.setItem('token', access_token)
            localStorage.setItem('tokenType', token_type)
            localStorage.setItem('expiresIn', expires_in)
        }
    }, [])

    return (
        <S.HomeContainer>
            <GetSalute />
            <div>
                <h2>Hi, Welcome to Swapi Music</h2>
                <p>
                    {' '}
                    This is a app to search, play, and save favorites songs,
                    albums,playlists. from the Spotify API
                </p>
                <p>Thank you for test my app 💕💕💕</p>
            </div>
        </S.HomeContainer>
    )
}

export default Home
