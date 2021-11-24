/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { domain } from '../../../assets/spotify'
import GetData from '../../../hooks/GetData/GetData'
import ISong, { SongItem } from '../../../hooks/types/GetTopSongs'
import * as S from '../../../styles/components/Spotify/MainSongs/Main.style'
import Song from './components/Song/Song'

interface IProps {}

const TopSongs: FC<IProps> = (props) => {
    const { items } = GetData<ISong>(`${domain}/top/tracks?limit=5`)
    return (
        <div>
            <h2>Top Tracks this month</h2>
            <div>
                {items?.map((item: SongItem, index: number) => (
                    <S.SongCard key={item.id}>
                        <S.SongNumber>{index + 1}</S.SongNumber>
                        <Song item={item} />
                    </S.SongCard>
                ))}
            </div>
        </div>
    )
}

export default TopSongs
