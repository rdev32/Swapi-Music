import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import Header from '../../components/playlist/components/header'
import Playlists from '../../components/playlist/Playlists'
import * as S from '../../styles/pages/profile/profile.style'
import { useRouter } from 'next/router'
import useActiveOptContext from '../../hooks/useActiveOptContext/useActiveOptContext'

const Playlist: NextPage = () => {
    const router = useRouter()
    const asPath = router.asPath
    const { setActive } = useContext(useActiveOptContext)
    useEffect(() => {
        asPath && setActive(asPath)
    }, [asPath])
    console.log(asPath)

    return (
        <S.UserBody>
            <Header />
            <Playlists />
        </S.UserBody>
    )
}

export default Playlist
