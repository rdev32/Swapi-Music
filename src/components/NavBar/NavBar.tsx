import { FC } from 'react'
import sections from '../../assets/sections.json'
import GetData from '../../hooks/GetData/GetData'
import { GetCurrentPlaylist } from '../../hooks/types/GetCurrentUserPlaylist'
import * as S from '../../styles/components/NavBar/NavBarStyle'
import NavBarSections from './components/NavBarSections'
import NavBarHeader from './components/NavBarHeader/NavBarHeader'

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
            <NavBarHeader />
            <NavBarSections Type="Menu" Section={sections.menu} />
            <NavBarSections Type="Library" Section={sections.library} />
            <NavBarSections
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
