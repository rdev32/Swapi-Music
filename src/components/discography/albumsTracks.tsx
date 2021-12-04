import { FC } from 'react'
import GetData from '../../hooks/GetData/GetData'
import { Album } from '../../hooks/types/GetAlbum'
import * as SSong from '../../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../../styles/pages/album/album.style'
import Song from '../../components/Spotify/Album/components/Songs/Song'

interface IProps {
    id: string
}

const AlbumsTracks: FC<IProps> = ({ id }) => {
    const urlAlbumsTracks = id ? `https://api.spotify.com/v1/albums/${id}` : ''
    const { images, name, artists, tracks, type } =
        GetData<Album>(urlAlbumsTracks)
    return (
        <S.AlbumAside>
            {tracks?.items.map((track, index) => (
                <SSong.SongCard key={track.id}>
                    <SSong.SongNumber>{index + 1}</SSong.SongNumber>
                    <Song song={track} />
                </SSong.SongCard>
            ))}
        </S.AlbumAside>
    )
}

export default AlbumsTracks
