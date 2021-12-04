import { FC } from 'react'
import { AlbumArtist } from '../../hooks/types/GetArtistAlbum'
import GetData from '../../hooks/GetData/GetData'
import { Artist } from '../../hooks/types/GetAlbum'
import * as SFollow from '../../styles/components/Spotify/Following/Following.style'
import * as SPlaylist from '../../styles/pages/library/library.style'
import * as S from '../../styles/components/albums/albums.style'
import UserImage from '../Spotify/UserImage/UserImage'
import Link from 'next/link'
import { colors } from '../../styles/colors'
import styled from '@emotion/styled'

export const AlbumRedirect = styled.a`
    margin: 10px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.3s;
    cursor: pointer;
    font-family: Inter;

    &:hover {
        padding: 10px;
        transition: 0.3s;
        background-color: ${colors.gray};
    }
`

interface IProps {
    artists: Artist[]
}

const AlbumArtist: FC<IProps> = ({ artists }) => {
    const urlArtistAlbums =
        artists && artists[0]?.id
            ? `https://api.spotify.com/v1/artists/${artists[0].id}/albums`
            : ''
    const { items } = GetData<AlbumArtist>(urlArtistAlbums)

    return (
        <>
            {items && (
                <footer>
                    {' '}
                    <S.AlbumsFooterHeader>
                        <h3>More by {items[0].artists[0].name} </h3>
                        <Link
                            href={{
                                pathname: '/discography/[pid]',
                                query: {
                                    pid: items[0].artists[0].id,
                                },
                            }}
                            passHref
                        >
                            <S.AlbumsFooterButton>
                                See Discography
                            </S.AlbumsFooterButton>
                        </Link>
                    </S.AlbumsFooterHeader>
                    <SFollow.ArtistCards height="248px">
                        {items.map((item) => (
                            <Link
                                href={{
                                    pathname: '/album/[pid]',
                                    query: { pid: item?.id },
                                }}
                                passHref
                                key={item.id}
                            >
                                <AlbumRedirect>
                                    {item.images.length > 0 && (
                                        <UserImage
                                            url={item.images[0].url}
                                            displayName={item.name}
                                            size={166}
                                            bradius={10}
                                        />
                                    )}
                                    <SPlaylist.PlaylistTitle>
                                        {item.name.length > 16
                                            ? `${item.name
                                                  .slice(0, 16)
                                                  .trim()}...`
                                            : item.name.slice(0, 16)}
                                    </SPlaylist.PlaylistTitle>
                                    <SPlaylist.PlaylistAuthor>
                                        {item.release_date.slice(0, 4)}
                                    </SPlaylist.PlaylistAuthor>
                                </AlbumRedirect>
                            </Link>
                        ))}
                    </SFollow.ArtistCards>
                </footer>
            )}
        </>
    )
}

export default AlbumArtist
