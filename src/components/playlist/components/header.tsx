import Link from 'next/link'
import { FC } from 'react'
import { useRouter } from 'next/router'
import UserImage from '../../../components/Spotify/UserImage/UserImage'
import GetData from '../../../hooks/GetData/GetData'
import GetTimeSongs from '../../../hooks/GetTimeSongs/GetTimeSongs'
import { GetPlaylistId } from '../../../hooks/types/GetPlayListId'
import * as S from '../../../styles/components/playlist/header.style'

const Header: FC = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = pid ? `https://api.spotify.com/v1/playlists/${pid}` : ''
    const { tracks, name, images, owner } = GetData<GetPlaylistId>(url)
    const ms = tracks?.items.reduce(
        (acc, curr) => (acc = acc + curr.track.duration_ms),
        0
    )
    const [hour, minutes, seconds] = GetTimeSongs({ ms })

    return (
        <header>
            {' '}
            <UserImage url={images && images[0]?.url} bradius={10} />
            <h5>PLAYLIST</h5>
            <h1>{name}</h1>
            <S.PlaylistHeaderDetails>
                <Link
                    href={{
                        pathname: `${
                            owner?.type === 'user'
                                ? '/users/[pid]'
                                : '/artist/[pid]'
                        }`,
                        query: { pid: owner?.id },
                    }}
                    passHref
                >
                    <a>{owner?.display_name}</a>
                </Link>
                <p>
                    {tracks?.total > 0 ? (
                        <>
                            <S.PlayListSeparator> • </S.PlayListSeparator>
                            {tracks?.total} Songs,{' '}
                            {hour ? `${hour} Hrs ${minutes} Min` : ''}{' '}
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
