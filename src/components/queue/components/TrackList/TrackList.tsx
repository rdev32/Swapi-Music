import dynamic from 'next/dynamic'
import { FC, useContext, useMemo } from 'react'
import { TrackId } from '../../../../hooks/UserTrackContext/types'
import UserTrackContext from '../../../../hooks/UserTrackContext/UserTrackContext'
import Track from '../Track/track'

interface IProps {
    tracks: TrackId[]
}

const TrackList: FC<IProps> = ({ tracks }) => {
    const { tracks: tracksContext, setTracks } = useContext(UserTrackContext)

    const handlePlayId = (id: number) => {
        setTracks({ ...tracksContext, position: id })
    }
    return (
        <>
            {tracks
                ?.filter((track) => track.position > tracksContext.position)
                .map((track, index) => (
                    <Track
                        key={track.id}
                        {...{ track, index }}
                        handleId={() => handlePlayId(track.position)}
                    />
                ))}
        </>
    )
}

export default TrackList
