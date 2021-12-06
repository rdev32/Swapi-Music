import { FC, useEffect, useState } from 'react'
import sections from '../../assets/sections.json'
import GetData from '../../hooks/GetData/GetData'
import { GetCurrentPlaylist } from '../../hooks/types/GetCurrentUserPlaylist'
import * as S from '../../styles/components/NavBar/NavBarStyle'
import NavBarHeader from './components/NavBarHeader/NavBarHeader'
import NavBarSection from './components/NavBarSections'
import { Playlist } from './types'

const NavBar: FC = () => {
    const [playlist, setPlaylist] = useState<Playlist>([])
    const { items } = GetData<GetCurrentPlaylist>(
        'https://api.spotify.com/v1/me/playlists'
    )
    useEffect(() => {
        const playlist = items?.map((item) => {
            return {
                id: item.id,
                name: item.name,
                path: `/playlist/${item.id}`,
            }
        })
        items && setPlaylist(playlist)
    }, [items])
    return (
        <S.NavBar>
            <NavBarHeader />
            <NavBarSection Type="Menu" Section={sections.menu} />
            <NavBarSection Type="Library" Section={sections.library} />
            <NavBarSection
                Type="Playlist"
                Section={playlist}
                icon="Library"
                styles={{
                    margin: '10px 0',
                    height: 'auto',
                }}
            />
        </S.NavBar>
    )
}

export default NavBar
