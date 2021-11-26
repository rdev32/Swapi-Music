import Link from 'next/link'
import { FC, useLayoutEffect, useState } from 'react'
import UserImage from '../../../components/Spotify/UserImage/UserImage'
import { ImagesLikedSongs } from '../../../hooks/types/GetLikedSongs'
import { Itracks, IOwner } from '../../../hooks/types/GetPlayListId'
import * as S from '../../../styles/components/playlist/header.style'
interface Props {
    name: string
    images: ImagesLikedSongs[]
    owner: IOwner
    tracks: Itracks
}
const Header: FC<Props> = ({ images, name, owner, tracks }) => {
    const [[hour, minutes, seconds], setDuration] = useState<number[]>([])

    useLayoutEffect(() => {
        const ms = tracks?.items?.reduce(
            (acc: any, curr: any) => (acc = acc + curr.track.duration_ms),
            0
        )
        const hour = Math.floor(ms / 3600000)
        const minutes = Math.floor(ms / 60000) - hour * 60
        const seconds = (ms % 60000) / 1000
        setDuration([hour, minutes, seconds])
    }, [tracks?.items])

    return (
        <header>
            {' '}
            <UserImage url={images && images[0]?.url} bradius={10} />
            <h5>PLAYLIST</h5>
            <h1>{name}</h1>
            <S.PlaylistHeaderDetails>
                <Link href={'/profile'} passHref>
                    <a>{owner?.display_name}</a>
                </Link>
                <S.PlayListSeparator> • </S.PlayListSeparator>
                <p>
                    {tracks?.total > 0 ? (
                        <>
                            {tracks?.total} Songs,{' '}
                            {hour ? `${hour} Hrs ${minutes}Min` : ''}{' '}
                            {!hour
                                ? `${minutes} Min ${Math.round(seconds)} Sec`
                                : ''}
                        </>
                    ) : (
                        ''
                    )}
                </p>
            </S.PlaylistHeaderDetails>
        </header>
    )
}

export default Header
