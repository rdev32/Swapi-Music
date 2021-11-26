/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { domain } from '../../../assets/spotify'
import GetData from '../../../hooks/GetData/GetData'
import ISong, { SongItem } from '../../../hooks/types/GetTopSongs'
import * as S from '../../../styles/components/Spotify/MainSongs/Main.style'
import Song from './components/Song/Song'

const TopSongs: FC = () => {
    const { items } = GetData<ISong>(`${domain}/top/tracks?limit=5`)

    return (
        <S.BoxStyle>
            <h2>Top Tracks this month</h2>
            <div>
                {items?.map((item: SongItem, index: number) => (
                    <S.SongCard key={item.id}>
                        <div style={{ width: '1%' }}>
                            <S.SongNumber>{index + 1}</S.SongNumber>
                        </div>

                        <Song item={item} />
                    </S.SongCard>
                ))}
            </div>
        </S.BoxStyle>
    )
}

export default TopSongs
