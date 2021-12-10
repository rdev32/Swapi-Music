import Link from 'next/link'
import {
    ChangeEvent,
    FC,
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react'
import GetData from '../../hooks/GetData/GetData'
import GetTrack from '../../hooks/types/GetTrack'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import {
    AleatoryButton,
    NavPlayer,
    PlayerInfoSong,
    RepeatButton,
} from '../../styles/components/NavBarPlayer/NavBarPlayer.style'
import * as SSong from '../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import { GetIcon, GetPlayerIcons } from '../Icons/Icons'
import UserImage from '../Spotify/UserImage/UserImage'
import Artists from './components/Artitsts/Artists'
import GetUrl from './helpers/GetUrl'

const NavBarPlayer: FC = () => {
    const { tracks, setTracks } = useContext(UserTrackContext)
    const [play, setPlay] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [aleatory, setAleatory] = useState(false)
    const [volumen, setVolumen] = useState(5)
    const audio = useRef<HTMLAudioElement>(null)
    const track = GetData<GetTrack>(GetUrl(tracks))

    const handlePlay = () => {
        audio.current?.play()
        if (audio.current) {
            setPlay(true)
            audio.current.autoplay = repeat
            audio.current.volume = volumen / 100
        }
    }

    const handlePause = () => {
        audio.current?.pause()
        setPlay(false)
    }
    const handleNext = () => {
        if (repeat) {
            setPlay(true)
            setTracks({
                ...tracks,
                position:
                    tracks.position >= tracks.tracks.length - 1
                        ? 0
                        : tracks.position + 1,
            })
        } else if (aleatory) {
            setPlay(true)
            setTracks({
                ...tracks,
                position:
                    tracks.position >= tracks.tracks.length - 1
                        ? 0
                        : Math.floor(Math.random() * tracks?.tracks?.length),
            })
        } else {
            setPlay(false)
            setTracks({
                ...tracks,
                position:
                    tracks.position >= tracks.tracks.length - 1
                        ? 0
                        : tracks.position + 1,
            })
        }
    }
    const handleBack = () => {
        if (repeat) {
            setPlay(true)
            setTracks({
                ...tracks,
                position:
                    tracks.position <= 0
                        ? tracks.tracks.length - 1
                        : tracks.position - 1,
            })
        } else {
            setPlay(false)
            setTracks({
                ...tracks,
                position:
                    tracks.position <= 0
                        ? tracks.tracks.length - 1
                        : tracks.position - 1,
            })
        }
    }

    const handleOnEnded = () => {
        if (repeat) {
            if (aleatory) {
                setTracks({
                    ...tracks,
                    position:
                        tracks.position >= tracks.tracks.length - 1
                            ? 0
                            : Math.floor(
                                  Math.random() * tracks?.tracks?.length
                              ),
                })
            } else {
                setTracks({
                    ...tracks,
                    position:
                        tracks.position >= tracks.tracks.length - 1
                            ? 0
                            : tracks.position + 1,
                })
            }
        } else {
            setPlay(false)
        }
    }

    const handleAleatory = () => {
        setAleatory(!aleatory)
        setTracks({
            ...tracks,
            aleatory: Math.random(),
        })
    }
    useLayoutEffect(() => {
        if (localStorage.getItem('tracks'))
            setTracks(JSON.parse(localStorage.getItem('tracks') || '{}'))
    }, [])

    useEffect(() => {
        if (audio.current) {
            audio.current.autoplay = aleatory || repeat
        }
    }, [aleatory, repeat])
    useEffect(() => {
        if (audio.current) {
            audio.current.src = track?.preview_url
        }
    }, [track])

    useEffect(() => {
        if (audio.current) {
            audio.current.volume = volumen / 100
        }
    }, [volumen])

    useEffect(() => {
        if (Object.keys(tracks).length > 0) {
            localStorage.setItem('tracks', JSON.stringify(tracks))
        }
    }, [tracks])

    return (
        <>
            {Object.keys(track).length !== 0 && (
                <NavPlayer>
                    <PlayerInfoSong>
                        <UserImage
                            url={track?.album?.images[2].url}
                            displayName={track.album.name}
                            size={60}
                            bradius={10}
                        />
                        <SSong.SongDescription>
                            <SSong.SontTitle>{track?.name}</SSong.SontTitle>
                            <SSong.SongArtists>
                                <Artists {...{ track }} />
                            </SSong.SongArtists>
                        </SSong.SongDescription>
                    </PlayerInfoSong>
                    <audio ref={audio} preload="auto" onEnded={handleOnEnded}>
                        <source src={track?.preview_url} type="audio/mpeg" />
                    </audio>

                    <SSong.SongPlayerIcons>
                        <AleatoryButton
                            aleatory={aleatory}
                            onClick={handleAleatory}
                        >
                            <GetPlayerIcons name="aleatory" />
                        </AleatoryButton>
                        <SSong.SongButton onClick={handleBack}>
                            {<GetIcon name="back" />}
                        </SSong.SongButton>
                        <SSong.SongButton
                            onClick={() => {
                                play ? handlePause() : handlePlay()
                            }}
                        >
                            <GetPlayerIcons name={play ? 'pause' : 'play'} />
                        </SSong.SongButton>
                        <SSong.SongButton onClick={handleNext}>
                            {<GetIcon name="next" />}
                        </SSong.SongButton>
                        <RepeatButton
                            onClick={() => setRepeat(!repeat)}
                            repeat={repeat}
                        >
                            <GetPlayerIcons name="repeat" />
                        </RepeatButton>
                    </SSong.SongPlayerIcons>
                    <SSong.SongPlayerVolumen>
                        <Link href="/queue">
                            <a>
                                {' '}
                                <GetPlayerIcons name="queue" />
                            </a>
                        </Link>
                        <input
                            type="range"
                            min="0"
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
