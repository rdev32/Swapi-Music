import React, { useState, useEffect, FC } from 'react'

type Props = {
    playing: boolean
    togglePlay: () => void
    audio: HTMLAudioElement
}

const Audio: FC = (url: string) => {
    return (
        <audio>
            <source src={url} />
        </audio>
    )
}

const useAudio = (url: string) => {
    const [playing, setPlaying] = useState(false)
    const [audio, setaudio] = useState(Audio(url))
    const toggle = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    }, [])

    return [playing, toggle, audio]
}
