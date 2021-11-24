import { FC, useState } from 'react'
import { SongItem } from '../../../../../hooks/types/GetTopSongs'
import * as S from '../../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../../../UserImage/UserImage'
interface IProps {
    item: SongItem
}

const Song: FC<IProps> = ({ item }) => {
    const [duration] = useState(
        new Date((item.duration_ms = 100 * Math.round(item.duration_ms / 100)))
    )

    return (
        <S.Song key={item.id}>
            <S.SongMain>
                <UserImage
                    url={item.album.images[0].url}
                    bradius={10}
                    displayName={item.name}
                    size={50}
                />
                <S.SongDescription>
                    <S.SontTitle>{item.name}</S.SontTitle>
                    <S.SongArtist>{item.artists[0].name}</S.SongArtist>
                </S.SongDescription>
            </S.SongMain>
            <S.SongTitleAlbum>
                <p>{item.album.name}</p>
            </S.SongTitleAlbum>
            <S.SongMinutesBox>
                <p>
                    {duration.getMinutes()}:
                    {duration.getSeconds() === 1
                        ? `0${duration.getSeconds()}`
                        : duration.getSeconds()}
                </p>
            </S.SongMinutesBox>
        </S.Song>
    )
}

export default Song
