import { FC } from 'react'
import { Albums } from '../../hooks/types/GetArtistAlbum'
import UserImage from '../Spotify/UserImage/UserImage'
import AlbumsTracks from './albumsTracks'
import * as S from '../../styles/pages/album/album.style'

interface IProps {
    album: Albums
}

const Albums: FC<IProps> = ({ album }) => {
    const firstCharacterUppercase = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return (
        <S.AlbumAside margin="0 0 50px 0">
            <S.AlbumHeader>
                <div>
                    {album.images.length > 0 && (
                        <UserImage
                            url={album.images[0].url}
                            displayName={album.name}
                            size={220}
                            bradius={10}
                        />
                    )}
                </div>
                <S.AlbumContent>
                    <h2>{album.name}</h2>
                    <p>
                        {firstCharacterUppercase(album.type)} •{' '}
                        {album.release_date.slice(0, 4)} • {album.total_tracks}{' '}
                        tracks
                    </p>
                </S.AlbumContent>
            </S.AlbumHeader>
            <AlbumsTracks id={album.id} />
        </S.AlbumAside>
    )
}

export default Albums
