import { NextPage } from 'next'
import Playlists from '../components/Spotify/Playlist/Playlists'
import * as S from '../styles/pages/library/library.style'
import { GetPlayList, IPlaylist } from '../hooks/types/GetPlayList'
import GetData from '../hooks/GetData/GetData'

const Library: NextPage = () => {
    const url = 'https://api.spotify.com/v1/me/playlists'
    const { items } = GetData<GetPlayList>(url)
    return (
        <S.LibraryStyleWrapper>
            <h1>Playlist</h1>
            <Playlists items={items} />
        </S.LibraryStyleWrapper>
    )
}

export default Library
