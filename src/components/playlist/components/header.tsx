import Link from 'next/link'
import { FC } from 'react'
import UserImage from '../../../components/Spotify/UserImage/UserImage'
import GetTimeSongs from '../../../hooks/GetTimeSongs/GetTimeSongs'
import { GetPlaylistId } from '../../../hooks/types/GetPlayListId'
import * as S from '../../../styles/components/playlist/header.style'
import * as SAlbum from '../../../styles/pages/album/album.style'

const Header: FC<{ data: GetPlaylistId }> = ({ data }) => {
    const ms = data.tracks?.items.reduce(
        (acc, curr) => (acc = acc + curr.track.duration_ms),
        0
    )
    const [hour, minutes, seconds] = GetTimeSongs({ ms })

    return (
        <SAlbum.AlbumHeader>
            <div>
                <UserImage
                    url={(data.images && data?.images[0]?.url) || ''}
                    bradius={10}
                    size={220}
                    name="playlistout"
                />
            </div>
            <SAlbum.AlbumContent>
                <h5>{data?.type?.toUpperCase()}</h5>
                <h1>{data?.name}</h1>
                <S.PlaylistHeaderDetails>
                    <Link
                        href={{
                            pathname: `${
                                data?.owner?.type === 'user'
                                    ? '/users/[pid]'
                                    : '/artist/[pid]'
                            }`,
                            query: { pid: data?.owner?.id },
                        }}
                        passHref
                    >
                        <a>{data?.owner?.display_name}</a>
                    </Link>
                    <p>
                        {data?.tracks?.total > 0 ? (
                            <>
                                <S.PlayListSeparator> • </S.PlayListSeparator>
                                {data?.tracks?.total} Songs,{' '}
                                {hour ? `${hour} Hrs ${minutes} Min` : ''}{' '}
                                {!hour
                                    ? `${minutes} Min ${Math.round(
                                          seconds
                                      )} Sec`
                                    : ''}
                            </>
                        ) : (
                            ''
                        )}
                    </p>
                </S.PlaylistHeaderDetails>
            </SAlbum.AlbumContent>
        </SAlbum.AlbumHeader>
    )
}

export default Header
