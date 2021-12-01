import { FC } from 'react'
import GetData from '../../hooks/GetData/GetData'
import { GetCurrentPlaylist } from '../../hooks/types/GetCurrentUserPlaylist'
import * as S from '../../styles/components/NavBar/NavBarStyle'
import List from './components/List'
import Title from './components/Title/Title'

const menu = [
    {
        id: 'Home',
        name: 'Home',
        path: '/Home',
    },
    {
        id: 'Search',
        name: 'Search',
        path: '/Search',
    },
]
const library = [
    {
        id: 'Library',
        name: 'Library',
        path: '/Library',
    },
    {
        id: 'LikedSongs',
        name: 'Liked Songs',
        path: '/Liked Songs',
    },
]

const NavBar: FC = () => {
    const url = 'https://api.spotify.com/v1/me/playlists'
    const { items } = GetData<GetCurrentPlaylist>(url)

    const playlist = items?.map((item) => {
        return {
            id: item.id,
            name: item.name,
            path: `/playlist/${item.id}`,
        }
    })
    return (
        <S.NavBar>
            <Title />
            <List Title="Menu" Section={menu} />
            <List Title="Library" Section={library} />
            <List Title="Playlist" Section={playlist} icon="Library" />
        </S.NavBar>
    )
}

export default NavBar
