import { NextPage } from 'next'
import { useContext } from 'react'
import Playlists from '../components/Spotify/Playlist/Playlists'
import UserContext from '../hooks/UserContext/UserContext'
import * as S from '../styles/general/styles'

const Library: NextPage = () => {
    const { playlists } = useContext(UserContext)
    return (
        <S.StyledContainer>
            <h1>Library</h1>
            <Playlists items={playlists} />
        </S.StyledContainer>
    )
}

export default Library
