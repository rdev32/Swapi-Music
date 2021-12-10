import { NextPage } from 'next'
import { useEffect, useLayoutEffect } from 'react'
import GetSalute from '../components/GetSalute/GetSalute'
import * as S from '../styles/general/styles'
import Cookies from 'js-cookie'

const Home: NextPage = () => {
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

    useLayoutEffect(() => {
        if (window.location.hash) {
            const { access_token } = getTokenParams(window.location.hash)
            localStorage.setItem('token', access_token)
            Cookies.set('token', access_token)
        }
    }, [])

    return (
        <S.StyledContainer>
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
        </S.StyledContainer>
    )
}

export default Home
