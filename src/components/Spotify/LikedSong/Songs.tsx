import { FC } from 'react'
import Song from '../../../components/Spotify/LikedSong/components/Song'
import GetData from '../../../hooks/GetData/GetData'
import { GetLikedSongs } from '../../../hooks/types/GetLikedSongs'
import * as S from '../../../styles/components/Spotify/MainSongs/Main.style'

const Songs: FC = () => {
    const url = 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0'
    const { items } = GetData<GetLikedSongs>(url)
    return (
        <div>
            {items?.map((song, index) => (
                <S.SongCard key={song.track.id}>
                    <div style={{ width: '1%' }}>
                        <S.SongNumber>{index + 1}</S.SongNumber>
                    </div>
                    <Song song={song} />
                </S.SongCard>
            ))}
        </div>
    )
}

export default Songs
