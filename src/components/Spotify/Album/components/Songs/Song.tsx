import { FC, useEffect, useState } from 'react'
import { IArtist } from '../../../../../hooks/types/GetTopSongs'
import * as S from '../../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'

interface IProps {
    song: IArtist
}

const Song: FC<IProps> = ({ song }) => {
    const [duration, setDuration] = useState('')

    useEffect(() => {
        const minutes = Math.floor(song?.duration_ms / 60000)
        const seconds = ((song?.duration_ms % 60000) / 1000).toFixed()
        const zero = minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds
        setDuration(zero)
    }, [song?.duration_ms])

    return (
        <S.Song key={song?.id}>
            <S.SongMain>
                <S.SongDescription>
                    <S.SontTitle>{song?.name}</S.SontTitle>
                    <S.SongArtist>{song?.artists[0].name}</S.SongArtist>
                </S.SongDescription>
            </S.SongMain>
            <S.SongMinutesBox>
                <p>{duration}</p>
            </S.SongMinutesBox>
        </S.Song>
    )
}

export default Song
