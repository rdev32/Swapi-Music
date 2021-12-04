import { FC, useContext } from 'react'
import GetData from '../../hooks/GetData/GetData'
import { Album } from '../../hooks/types/GetAlbum'
import * as SSong from '../../styles/components/Spotify/MainSongs/Main.style'
import * as S from '../../styles/pages/album/album.style'
import Song from '../../components/Spotify/Album/components/Songs/Song'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import * as SMSongs from '../../styles/components/Spotify/MainSongs/Main.style'

interface IProps {
    id: string
}

const AlbumsTracks: FC<IProps> = ({ id }) => {
    const { setTracks } = useContext(UserTrackContext)

    const urlAlbumsTracks = id ? `https://api.spotify.com/v1/albums/${id}` : ''
    const { images, name, artists, tracks, type } =
        GetData<Album>(urlAlbumsTracks)

    const newTracks = tracks?.items?.map((track) => {
        return {
            id: track.id,
        }
    })
    const handlePlayId = (id: number) => {
        setTracks({ tracks: newTracks, position: id })
    }
    return (
        <S.AlbumAside>
            {tracks?.items.map((track, index) => (
                <SSong.SongCard key={track.id}>
                    <div style={{ width: '1%' }}>
                        <SMSongs.SongNumber>{index + 1}</SMSongs.SongNumber>
                    </div>
                    <button onClick={() => handlePlayId(index)}>Play</button>
                    <Song song={track} />
                </SSong.SongCard>
            ))}
        </S.AlbumAside>
    )
}

export default AlbumsTracks
