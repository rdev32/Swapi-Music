import Link from 'next/link'
import { FC } from 'react'
import GetData from '../../../hooks/GetData/GetData'
import GetUserAlbums from '../../../hooks/types/GetUserAlbums'
import * as S from '../../../styles/general/styles'
import * as SFollow from '../../../styles/components/User/Following.style'
import * as SAlbums from '../../../styles/components/albums/albums.style'
import UserImage from '../../../components/Spotify/UserImage/UserImage'
import * as SPlaylist from '../../../styles/pages/library/library.style'

interface IProps {}

const Albums: FC<IProps> = (props) => {
    const { items } = GetData<GetUserAlbums>(
        'https://api.spotify.com/v1/me/albums?limit=50'
    )

    return (
        <S.StyledLibraryContainer>
            <h1>Albums</h1>
            {items && (
                <SFollow.ArtistCards height="auto">
                    {items.map((album) => (
                        <Link
                            href={{
                                pathname: '/album/[pid]',
                                query: { pid: album?.album.id },
                            }}
                            passHref
                            key={album.album.id}
                        >
                            <SAlbums.AlbumRedirect>
                                {album.album.images.length > 0 && (
                                    <UserImage
                                        url={album.album.images[0].url}
                                        displayName={album.album.name}
                                        size={166}
                                        bradius={10}
                                    />
                                )}
                                <SPlaylist.PlaylistTitle>
                                    {album.album.name.length > 16
                                        ? `${album.album.name
                                              .slice(0, 16)
                                              .trim()}...`
                                        : album.album.name.slice(0, 16)}
                                </SPlaylist.PlaylistTitle>
                                <SPlaylist.PlaylistAuthor>
                                    {album.album.release_date.slice(0, 4)}
                                </SPlaylist.PlaylistAuthor>
                            </SAlbums.AlbumRedirect>
                        </Link>
                    ))}
                </SFollow.ArtistCards>
            )}
        </S.StyledLibraryContainer>
    )
}

export default Albums
