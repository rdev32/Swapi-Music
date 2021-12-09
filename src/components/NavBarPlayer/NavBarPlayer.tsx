import {
    ChangeEvent,
    FC,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import GetData from '../../hooks/GetData/GetData'
import GetTrack from '../../hooks/types/GetTrack'
import { Tracks } from '../../hooks/UserTrackContext/types'
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
import Link from 'next/link'
import dynamic from 'next/dynamic'

const NavBarPlayer: FC = () => {
    const { tracks, setTracks } = useContext(UserTrackContext)
    const [play, setPlay] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [aleatory, setAleatory] = useState(false)
    const [volumen, setVolumen] = useState(5)
    // console.log(state)

    const getUrl = (getTrack: Tracks) => {
        const url =
            getTrack?.tracks && getTrack?.tracks[getTrack.position]?.id
                ? `https://api.spotify.com/v1/tracks/${
                      getTrack?.tracks[getTrack.position]?.id
                  }`
                : ''

        return url
    }
    const audio = useRef<HTMLAudioElement>(null)
    const track = GetData<GetTrack>(getUrl(tracks))

    const QueueIcon = useMemo(
        () => dynamic(() => import(`../../../public/icons/Player/queue.svg`)),
        []
    )
    const RepeatIcon = useMemo(
        () => dynamic(() => import(`../../../public/icons/Player/repeat.svg`)),
        []
    )
    const AleatoryIcon = useMemo(
        () =>
            dynamic(() => import(`../../../public/icons/Player/aleatory.svg`)),
        []
    )
    const handlePlay = () => {
        if (audio.current) {
            audio.current?.play()
            setPlay(true)
            audio.current.autoplay = repeat
            audio.current.volume = volumen / 100
        }
    }

    const handlePause = () => {
        audio.current?.pause()
        setPlay(false)
    }
    useLayoutEffect(() => {
        if (localStorage.getItem('tracks'))
            setTracks(JSON.parse(localStorage.getItem('tracks') || '{}'))
    }, [])

    useEffect(() => {
        if (audio.current) {
            audio.current.autoplay = repeat
        }
    }, [repeat])
    useEffect(() => {
        if (audio.current) {
            audio.current.autoplay = aleatory
        }
    }, [aleatory])
    useEffect(() => {
        if (audio.current) {
            audio.current.src = track?.preview_url
        }
    }, [track])

    useEffect(() => {
        if (audio.current) {
            audio.current.volume = volumen / 100
        }
    }, [audio.current, volumen])

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
                                {track?.artists.map((artist, index) => (
                                    <Link
                                        key={artist?.id}
                                        href={{
                                            pathname: '/artist/[pid]',
                                            query: {
                                                pid: artist?.id,
                                            },
                                        }}
                                        passHref
                                    >
                                        <SSong.SongArtist>
                                            {index === 0 ? '' : `,`}{' '}
                                            {artist?.name}
                                        </SSong.SongArtist>
                                    </Link>
                                ))}
                            </SSong.SongArtists>
                        </SSong.SongDescription>
                    </PlayerInfoSong>
                    <audio
                        ref={audio}
                        preload="auto"
                        onEnded={() => {
                            if (repeat) {
                                if (aleatory) {
                                    handlePlay()
                                    setTracks({
                                        ...tracks,
                                        position:
                                            tracks.position >=
                                            tracks.tracks.length - 1
                                                ? 0
                                                : Math.floor(
                                                      Math.random() *
                                                          tracks?.tracks?.length
                                                  ),
                                    })
                                } else {
                                    handlePlay()
                                    setTracks({
                                        ...tracks,
                                        position:
                                            tracks.position >=
                                            tracks.tracks.length - 1
                                                ? 0
                                                : tracks.position + 1,
                                    })
                                }
                            } else {
                                setPlay(false)
                            }
                        }}
                    >
                        <source src={track?.preview_url} type="audio/mpeg" />
                    </audio>

                    <SSong.SongPlayerIcons>
                        <AleatoryButton
                            aleatory={aleatory}
                            onClick={() => setAleatory(!aleatory)}
                        >
                            <AleatoryIcon />
                        </AleatoryButton>
                        <SSong.SongButton
                            onClick={() => {
                                setTracks({
                                    ...tracks,
                                    position:
                                        tracks.position <= 0
                                            ? tracks.tracks.length - 1
                                            : tracks.position - 1,
                                })
                            }}
                        >
                            {<GetIcon name="back" />}
                        </SSong.SongButton>
                        <SSong.SongButton
                            onClick={() => {
                                play ? handlePause() : handlePlay()
                            }}
                        >
                            <GetPlayerIcons name={play ? 'pause' : 'play'} />
                        </SSong.SongButton>
                        <SSong.SongButton
                            onClick={() => {
                                setTracks({
                                    ...tracks,
                                    position: aleatory
                                        ? tracks.position >=
                                          tracks.tracks.length - 1
                                            ? 0
                                            : Math.floor(
                                                  Math.random() *
                                                      tracks?.tracks?.length
                                              )
                                        : tracks.position >=
                                          tracks.tracks.length - 1
                                        ? 0
                                        : tracks.position + 1,
                                })
                            }}
                        >
                            {<GetIcon name="next" />}
                        </SSong.SongButton>
                        <RepeatButton
                            onClick={() => setRepeat(!repeat)}
                            repeat={repeat}
                        >
                            <RepeatIcon />
                        </RepeatButton>
                    </SSong.SongPlayerIcons>
                    <SSong.SongPlayerVolumen>
                        <Link href="/queue">
                            <a>
                                {' '}
                                <QueueIcon />
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
