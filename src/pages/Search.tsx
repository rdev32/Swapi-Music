import { FC, useState } from 'react'
import SearchBar from '../components/Search/SearchBar/SearchBar'
import GetSearch from '../hooks/GetSearch/GetSearch'
import { IGetSearch } from '../hooks/types/GetSearch'
import * as S from '../styles/pages/profile/profile.style'
import Image from 'next/image'
import PlayList from '../components/Spotify/Playlist/PlayList'
const Search: FC = () => {
    const [search, setSearch] = useState('')
    const {
        data: { albums, artists, playlists, episodes, tracks, shows },
        setCount,
    } = GetSearch<IGetSearch>(search)

    console.log(albums)

    return (
        <S.UserBody>
            <h1>Search</h1>
            <SearchBar
                onChange={(event) => {
                    setSearch(event.target.value)
                    setCount(0)
                }}
                value={search}
            />
            {playlists &&
                playlists?.items?.map((playlist) => (
                    <PlayList key={playlist.id} playlist={playlist} />
                ))}
        </S.UserBody>
    )
}

export default Search
