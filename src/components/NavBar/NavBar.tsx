import { FC, useEffect, useState } from 'react'
import GetData from '../../hooks/GetData/GetData'
import { GetCurrentPlaylist } from '../../hooks/types/GetCurrentUserPlaylist'
import * as S from '../../styles/components/NavBar/NavBarStyle'
import List from './components/List'
import Title from './components/Title/Title'
import sections from '../../assets/sections.json'

type PlaylistProps = {
    id: string
    name: string
    path: string
}

const NavBar: FC = () => {
    const url = 'https://api.spotify.com/v1/me/playlists'
    const { items } = GetData<GetCurrentPlaylist>(url)
    const [playlists, setPlaylists] = useState<PlaylistProps[]>([])

    useEffect(() => {
        const playlist = items?.map((item) => {
            return {
                id: item.id,
                name: item.name,
                path: `/playlist/${item.id}`,
            }
        })

        items && setPlaylists(playlist)
    }, [items])

    return (
        <S.NavBar>
            <Title />
            <List Title="Menu" Section={sections.menu} />
            <List Title="Library" Section={sections.library} />
            {playlists && (
                <List Title="Playlist" Section={playlists} icon="Library" />
            )}
        </S.NavBar>
    )
}

export default NavBar
