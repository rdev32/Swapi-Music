import dynamic from 'next/dynamic'
import {
    ChangeEvent,
    FC,
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

interface GetIcon {
    name: string
}

const GetIcon: FC<GetIcon> = ({ name }) => {
    const Icon = useMemo(
        () => dynamic(() => import(`../../../public/icons/Player/${name}.svg`)),
        [name]
    )
    if (Icon) {
        return <Icon />
    }
    return null
}
const NavBarPlayer: FC = () => {
    const [playing, setPlaying] = useState(false)
    const [volumen, setVolumen] = useState(5)
    const { tracks } = useContext(UserTrackContext)
    const [position, setPosition] = useState(tracks?.position)
    const url =
        tracks?.tracks?.length > 0 &&
        position <= tracks?.tracks?.length &&
        tracks?.tracks[position]?.id
            ? `https://api.spotify.com/v1/tracks/${tracks.tracks[position]?.id}`
            : ''

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
        tracks && setPosition(tracks.position)
    }, [tracks])
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
    console.log(position)

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
                    <audio ref={audio} preload="auto">
                        <source src={track?.preview_url} type="audio/mpeg" />
                    </audio>
                    <SSong.SongPlayerIcons>
                        <SSong.SongButton
                            onClick={() =>
                                setPosition(
                                    position <= 0
                                        ? tracks.tracks.length - 1
                                        : position - 1
                                )
                            }
                        >
                            {<GetIcon name="back" />}
                        </SSong.SongButton>
                        <SSong.SongButton
                            onClick={() => {
                                playing ? handlePause() : handlePlay()
                            }}
                        >
                            {playing ? <PauseIcon /> : <PlayIcon />}
                        </SSong.SongButton>
                        <SSong.SongButton
                            onClick={() => {
                                setPosition(
                                    position >= tracks.tracks.length - 1
                                        ? 0
                                        : position + 1
                                )
                            }}
                        >
                            {<GetIcon name="next" />}
                        </SSong.SongButton>
                    </SSong.SongPlayerIcons>
                    <SSong.SongPlayerVolumen>
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
                    </SSong.SongPlayerVolumen>
                </NavPlayer>
            )}
        </>
    )
}

export default NavBarPlayer
