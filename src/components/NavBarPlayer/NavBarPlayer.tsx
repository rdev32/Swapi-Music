import dynamic from 'next/dynamic'
import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
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
    const [playing, setPlaying] = useState(false)
    const [volumen, setVolumen] = useState(5)
    const { idTrack } = useContext(UserTrackContext)
    const url = idTrack ? `https://api.spotify.com/v1/tracks/${idTrack}` : ''
    const track = GetData<GetTrack>(url)
    const audio = useRef<HTMLAudioElement>(null)

    const PauseIcon = useMemo(
        () => dynamic(() => import(`../../../public/icons/Player/pause.svg`)),
        []
    )
    const PlayIcon = useMemo(
        () => dynamic(() => import(`../../../public/icons/Player/play.svg`)),
        []
    )

    const handlePlay = () => {
        audio.current?.play()
        setPlaying(true)
    }

    const handlePause = () => {
        audio.current?.pause()
        setPlaying(false)
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
                            {playing ? <PauseIcon /> : <PlayIcon />}
                        </SSong.SongButton>
                    </div>
                    <div>
                        <input
                            type="range"
                            min="5"
                            max="50"
                            value={volumen}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                setVolumen(parseInt(event.target.value))
                            }
                            step="any"
                        />
                    </div>
                </NavPlayer>
            )}
        </>
    )
}

export default NavBarPlayer
