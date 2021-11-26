import { NextPage } from 'next'
import Header from '../../components/playlist/components/header'
import Playlists from '../../components/playlist/Playlists'
import * as S from '../../styles/pages/playlist/playlist.style'

const Playlist: NextPage = () => {
    return (
        <S.PlaylistStyleWrapper>
            <Header />
            <Playlists />
        </S.PlaylistStyleWrapper>
    )
}

export default Playlist
