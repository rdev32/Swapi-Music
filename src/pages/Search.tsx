import { FC, useState } from 'react'
import ArtistCard from '../components/Artist/Artist'
import SearchBar from '../components/Search/SearchBar/SearchBar'
import Song from '../components/Spotify/MainSongs/components/Song/Song'
import PlayList from '../components/Spotify/Playlist/PlayList'
import UserImage from '../components/Spotify/UserImage/UserImage'
import GetData from '../hooks/GetData/GetData'
import GetSearch from '../hooks/GetSearch/GetSearch'
import { IArtists, IGetSearch } from '../hooks/types/GetSearch'
import { FormContainer } from '../styles/components/Search/SearchBar.style'
import * as SFollow from '../styles/components/Spotify/Following/Following.style'
import * as STracks from '../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../styles/pages/profile/profile.style'
const Search: FC = () => {
    const [search, setSearch] = useState('')
    const {
        data: { albums, artists, playlists, episodes, tracks, shows },
        setCount,
    } = GetSearch<IGetSearch>(search)
    const urlArtist = `https://api.spotify.com/v1/artists/${
        tracks?.items && tracks?.items[0]?.artists[0]?.id
    }`

    const Artist = GetData<IArtists>(
        tracks?.items[0].artists[0].id ? urlArtist : ''
    )

    return (
        <S.UserBody>
            <FormContainer>
                <SearchBar
                    onChange={(event) => {
                        setSearch(event.target.value)
                        setCount(0)
                    }}
                    setSearch={setSearch}
                    value={search}
                />
            </FormContainer>
            <div>
                <div>
                    {Artist && (
                        <>
                            <div>
                                {Artist.images && (
                                    <UserImage
                                        url={Artist.images[0].url}
                                        displayName={Artist.name}
                                        bradius={10}
                                        size={200}
                                    />
                                )}
                            </div>
                            <h1>{Artist?.name}</h1>
                            <h4>{Artist?.type?.toUpperCase()}</h4>
                        </>
                    )}
                </div>
                <div>
                    {tracks && (
                        <>
                            <h4>Tracks</h4>
                            {tracks?.items?.map((track, index) => (
                                <STracks.SongCard key={track.id}>
                                    <div style={{ width: '1%' }}>
                                        <STracks.SongNumber>
                                            {index + 1}
                                        </STracks.SongNumber>
                                    </div>

                                    <Song item={track} />
                                </STracks.SongCard>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div>
                {playlists && (
                    <>
                        <h4>Playlists</h4>
                        <SFollow.ArtistCards height="228px">
                            {playlists?.items?.map((playlist) => (
                                <PlayList
                                    key={playlist.id}
                                    playlist={playlist}
                                />
                            ))}
                        </SFollow.ArtistCards>
                    </>
                )}
            </div>
            <div>
                {artists && (
                    <>
                        <h4>Artist</h4>
                        <SFollow.ArtistCards height="260px">
                            {artists?.items?.map((artist) => (
                                <ArtistCard key={artist.id} item={artist} />
                            ))}
                        </SFollow.ArtistCards>
                    </>
                )}
            </div>
        </S.UserBody>
    )
}

export default Search
