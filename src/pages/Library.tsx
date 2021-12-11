import { NextPage } from 'next'
import { useContext } from 'react'
import Playlists from '../components/Spotify/Playlist/Playlists'
import UserContext from '../hooks/UserContext/UserContext'
import * as S from '../styles/general/styles'

const Library: NextPage = () => {
    const { playlists } = useContext(UserContext)
    return (
        <S.StyledLibraryContainer>
            <h1>Playlists</h1>
            <Playlists items={playlists} />
        </S.StyledLibraryContainer>
    )
}

export default Library
