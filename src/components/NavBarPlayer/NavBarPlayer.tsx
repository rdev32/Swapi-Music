import dynamic from 'next/dynamic'
import { FC, useContext, useEffect, useMemo, useRef, useState } from 'react'
import GetData from '../../hooks/GetData/GetData'
import GetTrack from '../../hooks/types/GetTrack'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import {
    NavPlayer,
    PlayerInfoSong,
} from '../../styles/components/NavBarPlayer/NavBarPlayer.style'
import * as SSong from '../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import UserImage from '../Spotify/UserImage/UserImage'

const NavBarPlayer: FC = () => {
    const { idTrack } = useContext(UserTrackContext)
    const url = idTrack ? `https://api.spotify.com/v1/tracks/${idTrack}` : ''
    const track = GetData<GetTrack>(url)
    const [playing, setPlaying] = useState(false)
    const [volumen, setVolumen] = useState(5)
    const audio = useRef<HTMLAudioElement>(null)

    const IconPause = useMemo(
        () => dynamic(() => import(`../../../public/icons/Player/pause.svg`)),
        []
    )
    const IconPlay = useMemo(
        () => dynamic(() => import(`../../../public/icons/Player/play.svg`)),
        []
    )

    const handlePlay = () => {
        audio.current?.play()
        setPlaying(true)
        audio.current.volume = 5 / 100
    }

    const handlePause = () => {
        audio.current?.pause()
        setPlaying(false)
        audio.current.volume = 0
    }
    useEffect(() => {
        if (audio.current) {
            setPlaying(false)
            audio.current.src = track?.preview_url
        }
    }, [track])

    useEffect(() => {
        if (audio.current) {
            audio.current.volume = volumen / 100
        }
    }, [volumen])
    console.log(volumen)

    return (
        <>
            {Object.keys(track).length !== 0 && (
                <NavPlayer>
                    <PlayerInfoSong>
                        <UserImage
                            url={track?.album?.images[0].url}
                            displayName={track.album.name}
                            size={60}
                            bradius={10}
                        />
                        <SSong.SongDescription>
                            <SSong.SontTitle>{track?.name}</SSong.SontTitle>
                            <SSong.SongArtist>
                                {track.artists
                                    .map((name) => `${name.name}`)
                                    .join(', ')}
                            </SSong.SongArtist>
                        </SSong.SongDescription>
                    </PlayerInfoSong>
                    <div>
                        <audio ref={audio} preload="auto">
                            <source
                                src={track?.preview_url}
                                type="audio/mpeg"
                            />
                        </audio>
                        <SSong.SongButton
                            onClick={() => {
                                playing ? handlePause() : handlePlay()
                            }}
                        >
                            {playing ? <IconPause /> : <IconPlay />}
                        </SSong.SongButton>
                    </div>
                    <input
                        type="range"
                        min="5"
                        max="100"
                        value={volumen}
                        onChange={(event: any) =>
                            setVolumen(parseInt(event.target.value))
                        }
                        step="any"
                    />
                </NavPlayer>
            )}
        </>
    )
}

export default NavBarPlayer
