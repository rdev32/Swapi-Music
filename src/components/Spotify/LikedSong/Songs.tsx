import { FC, useContext, useEffect, useState } from 'react'
import Song from '../../../components/Spotify/LikedSong/components/Song'
import GetData from '../../../hooks/GetData/GetData'
import { GetLikedSongs } from '../../../hooks/types/GetLikedSongs'
import UserTrackContext from '../../../hooks/UserTrackContext/UserTrackContext'
import * as S from '../../../styles/components/Spotify/MainSongs/Main.style'

const Songs: FC = () => {
    const url = 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0'
    const { items } = GetData<GetLikedSongs>(url)
    const { tracks, setTracks } = useContext(UserTrackContext)

    const handlePlayId = (id: number) => {
        setTracks({ ...tracks, position: id })
    }
    useEffect(() => {
        items &&
            setTracks({
                ...tracks,
                tracks: items.map((item: any) => item.track),
            })
    }, [items])
    return (
        <div>
            {items?.map((song, index) => (
                <S.SongCard key={song.track.id}>
                    <div style={{ width: '1%' }}>
                        <S.SongNumber>{index + 1}</S.SongNumber>
                    </div>
                    <button onClick={() => handlePlayId(index)}>Play</button>
                    <Song song={song} />
                </S.SongCard>
            ))}
        </div>
    )
}

export default Songs
