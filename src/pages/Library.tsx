import { NextPage } from 'next'
import Playlists from '../components/Spotify/Playlist/Playlists'
import * as S from '../styles/pages/library/library.style'

const Library: NextPage = () => {
    return (
        <S.LibraryStyleWrapper>
            <h1>Playlist</h1>
            <Playlists />
        </S.LibraryStyleWrapper>
    )
}

export default Library
