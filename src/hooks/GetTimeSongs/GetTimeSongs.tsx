import { useLayoutEffect, useState } from 'react'
import { Itracks } from '../../hooks/types/GetPlayListId'

const GetTimeSongs = ({ tracks, ms }: { tracks?: Itracks; ms?: number }) => {
    const [[hour, minutes, seconds], setDuration] = useState<number[]>([])

    useLayoutEffect(() => {
        if (tracks) {
            const ms = tracks?.items?.reduce(
                (acc: number, curr) => (acc = acc + curr.track.duration_ms),
                0
            )
            const hour = Math.floor(ms / 3600000)
            const minutes = Math.floor(ms / 60000) - hour * 60
            const seconds = (ms % 60000) / 1000
            setDuration([hour, minutes, seconds])
        }
        if (ms) {
            const hour = Math.floor(ms / 3600000)
            const minutes = Math.floor(ms / 60000) - hour * 60
            const seconds = (ms % 60000) / 1000
            setDuration([hour, minutes, seconds])
        }
        return () => {
            setDuration([])
        }
    }, [tracks, ms])

    return [hour, minutes, seconds]
}

export default GetTimeSongs
