import { FC, useEffect, useState } from 'react'
import { SongItem } from '../../../../../hooks/types/GetTopSongs'
import * as S from '../../../../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../../../UserImage/UserImage'
import Link from 'next/link'
interface IProps {
    item: SongItem
}

const Song: FC<IProps> = ({ item }) => {
    const [duration, setDuration] = useState('')

    useEffect(() => {
        const minutes = Math.floor(item.duration_ms / 60000)
        const seconds = ((item.duration_ms % 60000) / 1000).toFixed()
        const zero = minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds
        setDuration(zero)
    }, [item.duration_ms])
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
                    <S.SongArtist>
                        {item.artists.map((name) => name.name).join(', ')}
                    </S.SongArtist>
                </S.SongDescription>
            </S.SongMain>
            <S.SongTitleAlbum>
                <Link
                    href={{
                        pathname: '/album/[pid]',
                        query: { pid: item.album.id },
                    }}
                    passHref
                >
                    <a>{item.album.name}</a>
                </Link>
            </S.SongTitleAlbum>
            <S.SongMinutesBox>
                <p>{duration}</p>
            </S.SongMinutesBox>
        </S.Song>
    )
}

export default Song
