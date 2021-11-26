/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import Song from '../components/Spotify/LikedSong/components/Song'
import GetData from '../hooks/GetData/GetData'
import { GetLikedSongs } from '../hooks/types/GetLikedSongs'
import * as SMSong from '../styles/components/Spotify/MainSongs/Main.style'

import * as S from '../styles/pages/Home.style'

interface IProps {}

const LikedSongs: FC<IProps> = (props) => {
    const url = 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0'

    const { items, next } = GetData<GetLikedSongs>(url)
    console.log(next)

    return (
        <S.HomeContainer>
            <h1>Liked Songs</h1>
            <div>
                {items?.map((song, index) => (
                    <SMSong.SongCard key={song.track.id}>
                        <div style={{ width: '1%' }}>
                            <SMSong.SongNumber>{index + 1}</SMSong.SongNumber>
                        </div>
                        <Song song={song} />
                    </SMSong.SongCard>
                ))}
            </div>
        </S.HomeContainer>
    )
}

export default LikedSongs
