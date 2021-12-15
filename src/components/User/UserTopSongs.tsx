import { FC, useContext } from 'react'
import { domain } from '../../assets/spotify'
import GetData from '../../hooks/GetData/GetData'
import ISong, { SongItem } from '../../hooks/types/GetTopSongs'
import UserContext from '../../hooks/UserContext/UserContext'
import * as S from '../../styles/components/Spotify/MainSongs/Main.style'
import Song from '../Spotify/MainSongs/components/Song/Song'

const UserTopSongs: FC = () => {
    const { items } = GetData<ISong>(`${domain}/top/tracks?limit=5`)
    const { setTracks } = useContext(UserContext)

    const newTracks = items?.map((item, index) => {
        return {
            id: item.id,
            position: index,
            trackname: item.name,
            artist: item.artists,
            album: {
                id: item.album.id,
                name: item.album.name,
                type: item.album.type,
            },
            duration_ms: item.duration_ms,
            images: item.album.images[0]?.url,
        }
    })

    const handlePlayId = (id: number) => {
        setTracks({
            tracks: newTracks,
            position: id,
            from: {
                name: 'My Top Tracks',
                id: 'user',
                type: '',
            },
        })
    }

    return (
        { items } && (
            <S.BoxStyle>
                <header>
                    <h2>Top tracks this month</h2>
                </header>
                <article>
                    {items?.map((item: SongItem, index: number) => (
                        <S.SongCard key={item.id}>
                            <Song
                                index={index}
                                item={item}
                                handleId={() => handlePlayId(index)}
                            />
                        </S.SongCard>
                    ))}
                </article>
            </S.BoxStyle>
        )
    )
}

export default UserTopSongs
