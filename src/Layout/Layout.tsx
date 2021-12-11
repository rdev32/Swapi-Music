import { useSession } from 'next-auth/react'
import { FC, useEffect, useState } from 'react'
import { domain } from '../assets/spotify'
import NavBar from '../components/NavBar/NavBar'
import NavBarPlayer from '../components/NavBarPlayer/NavBarPlayer'
import UserIcon from '../components/userIcon/userIcon'
import GetData from '../hooks/GetData/GetData'
import { GetCurrentPlaylist } from '../hooks/types/GetCurrentUserPlaylist'
import { User } from '../hooks/types/GetUserProfile'
import UserContext from '../hooks/UserContext/UserContext'
import * as S from '../styles/components/layout/layout.style'
import {
    NavLibrary,
    NavLibraryItem,
} from '../styles/components/layout/NavLibrary.style'
import { IProps } from './types'
import Link from 'next/link'

const Layout: FC<IProps> = ({ children, router }) => {
    const [libraryCheck, setLibraryCheck] = useState(router.pathname)
    const invalidPages = ['/', '/login/login']
    const Sections = ['Playlists', 'Artists', 'Albums']
    const LibrarySections = ['/Library', '/Library/Artists', '/Library/Albums']
    const user = GetData<User>(domain)
    const { items } = GetData<GetCurrentPlaylist>(
        'https://api.spotify.com/v1/me/playlists'
    )

    return (
        <UserContext.Provider value={{ user, playlists: items }}>
            <S.AppMain>
                {!invalidPages.includes(router?.pathname) && (
                    <NavBar data={items} />
                )}
                <S.AppBodyBox>
                    {LibrarySections.includes(router?.pathname) && (
                        <NavLibrary>
                            {Sections.map((section, index) => (
                                <Link
                                    href={
                                        section === 'Playlists'
                                            ? '/Library'
                                            : `/Library/${section}`
                                    }
                                    key={section + index}
                                    passHref
                                >
                                    <NavLibraryItem
                                        active={
                                            router.pathname ===
                                            `${
                                                section === 'Playlists'
                                                    ? '/Library'
                                                    : `/Library/${section}`
                                            }`
                                                ? true
                                                : false ||
                                                  router?.pathname ===
                                                      `/Library/${section}`
                                        }
                                        onClick={() =>
                                            setLibraryCheck(
                                                section === 'Playlists'
                                                    ? '/Library'
                                                    : `/Library/${section}`
                                            )
                                        }
                                    >
                                        {section}
                                    </NavLibraryItem>
                                </Link>
                            ))}
                        </NavLibrary>
                    )}
                    {children}
                    {!invalidPages.includes(router?.pathname) && (
                        <NavBarPlayer />
                    )}
                </S.AppBodyBox>
                {!invalidPages.includes(router?.pathname) && (
                    <UserIcon {...{ user }} />
                )}
            </S.AppMain>
        </UserContext.Provider>
    )
}

export default Layout
