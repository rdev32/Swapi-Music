import { FC } from 'react'
import { domain } from '../../assets/spotify'
import GetData from '../../hooks/GetData/GetData'
import ISong, { SongItem } from '../../hooks/types/GetTopSongs'
import * as S from '../../styles/components/Spotify/MainSongs/Main.style'
import Song from '../Spotify/MainSongs/components/Song/Song'

const UserTopSongs: FC = () => {
    const { items } = GetData<ISong>(`${domain}/top/tracks?limit=5`)

    return (
        <S.BoxStyle>
            <header>
                <h2>Top tracks this month</h2>
            </header>
            <article>
                {items?.map((item: SongItem, index: number) => (
                    <S.SongCard key={item.id}>
                        <div style={{ width: '1%' }}>
                            <S.SongNumber>{index + 1}</S.SongNumber>
                        </div>

                        <Song item={item} />
                    </S.SongCard>
                ))}
            </article>
        </S.BoxStyle>
    )
}

export default UserTopSongs
