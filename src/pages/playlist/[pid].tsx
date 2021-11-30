import { NextPage } from 'next'
import Header from '../../components/playlist/components/header'
import Playlists from '../../components/playlist/Playlists'
import * as S from '../../styles/pages/profile/profile.style'

const Playlist: NextPage = () => {
    return (
        <S.UserBody>
            <Header />
            <Playlists />
        </S.UserBody>
    )
}

export default Playlist
