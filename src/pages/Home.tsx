import Cookies from 'js-cookie'
import { NextPage } from 'next'
import { useContext, useLayoutEffect } from 'react'
import GetSalute from '../components/GetSalute/GetSalute'
import UserContext from '../hooks/UserContext/UserContext'
import * as S from '../styles/general/styles'
import Link from 'next/link'
import * as SSHome from '../styles/pages/Home.style'
import AtomIcon from '../components/SvgDynamic/SvgDynamic'
import UserImage from '../components/Spotify/UserImage/UserImage'
import UserArtists from '../components/User/UserTopArtists'

const Home: NextPage = () => {
    const { recent } = useContext(UserContext)
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
    console.log(recent)

    return (
        <S.StyledContainer>
            <GetSalute />
            <SSHome.Cards>
                <aside>
                    <Link href="/LikedSongs" passHref>
                        <SSHome.LikedSongButton>
                            <AtomIcon name="Liked Songs" active />
                            <p>Liked Songs</p>
                        </SSHome.LikedSongButton>
                    </Link>
                    {recent.length > 0 &&
                        recent.map((item) => (
                            <Link href={item?.url} key={item.id} passHref>
                                <SSHome.Card>
                                    <AtomIcon name="Recent Song" active />
                                    <UserImage
                                        url={item.image}
                                        size={69}
                                        bradius={'10px 0 0 10px'}
                                    />
                                    {item.tag.length > 15 ? (
                                        <p style={{ width: '100px' }}>
                                            {item.tag.slice(0, 15)}...
                                        </p>
                                    ) : (
                                        <p style={{ width: '100px' }}>
                                            {item.tag}
                                        </p>
                                    )}
                                </SSHome.Card>
                            </Link>
                        ))}
                </aside>
            </SSHome.Cards>
            <UserArtists title="Your Favorites Artists" />
        </S.StyledContainer>
    )
}

export default Home
