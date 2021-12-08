import { FC, useContext } from 'react'
import { TrackId } from '../../../../hooks/UserTrackContext/types'
import UserTrackContext from '../../../../hooks/UserTrackContext/UserTrackContext'
import * as SSMain from '../../../../styles/components/Spotify/MainSongs/Main.style'
import Track from '../Track/Track'

const TrackList: FC<{ tracks: TrackId[] }> = ({ tracks }) => {
    const { tracks: tracksContext, setTracks } = useContext(UserTrackContext)

    const handlePlayId = (id: number) => {
        setTracks({ ...tracksContext, position: id })
    }
    return (
        <>
            {tracks
                ?.filter((track) => track.position > tracksContext.position)
                .map((track, index) => (
                    <SSMain.SongCard key={track.id}>
                        <Track
                            key={track.id}
                            {...{ track, index }}
                            handleId={() => handlePlayId(track.position)}
                        />
                    </SSMain.SongCard>
                ))}
        </>
    )
}

export default TrackList
