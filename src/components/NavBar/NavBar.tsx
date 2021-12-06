import { FC, useEffect, useState } from 'react'
import sections from '../../assets/sections.json'
import { GetPlaylist } from '../../hooks/types/GetCurrentUserPlaylist'
import * as S from '../../styles/components/NavBar/NavBarStyle'
import NavBarHeader from './components/NavBarHeader/NavBarHeader'
import NavBarSection from './components/NavBarSections'
import { Playlist } from './types'

const NavBar: FC<{ data: GetPlaylist[] }> = ({ data }) => {
    const [playlist, setPlaylist] = useState<Playlist>([])

    useEffect(() => {
        const playlist = data?.map((item) => {
            return {
                id: item.id,
                name: item.name,
                path: `/playlist/${item.id}`,
            }
        })
        data && setPlaylist(playlist)
    }, [data])
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
