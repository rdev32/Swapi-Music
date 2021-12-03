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
import { Tracks } from '../../hooks/UserTrackContext/types'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import {
    NavPlayer,
    PlayerInfoSong,
} from '../../styles/components/NavBarPlayer/NavBarPlayer.style'
import * as SSong from '../../styles/components/Spotify/MainSongs/components/Song/Song.style'
import { GetIcon, GetPlayerIcons } from '../Icons/Icons'
import UserImage from '../Spotify/UserImage/UserImage'

const NavBarPlayer: FC = () => {
    const { tracks, setTracks } = useContext(UserTrackContext)
    const [saveTracks, setSaveTracks] = useState<Tracks>({} as Tracks)
    const [playing, setPlaying] = useState(false)
    const [volumen, setVolumen] = useState(5)

    const getUrl = (getTrack: Tracks) => {
        const url =
            getTrack?.tracks && getTrack?.tracks[getTrack.position]?.id
                ? `https://api.spotify.com/v1/tracks/${
                      getTrack?.tracks[getTrack.position]?.id
                  }`
                : ''
        console.log(url)

        return url
    }

    const track = GetData<GetTrack>(
        getUrl(tracks) === '' ? getUrl(saveTracks) : getUrl(tracks)
    )

    const audio = useRef<HTMLAudioElement>(null)

    const handlePlay = () => {
        audio.current?.play()
        setPlaying(true)
        if (audio.current) {
            audio.current.volume = volumen / 100
        }
    }

    const handlePause = () => {
        audio.current?.pause()
        setPlaying(false)
    }
    useLayoutEffect(() => {
        if (localStorage.getItem('tracks')) {
            const local = JSON.parse(localStorage.getItem('tracks') || '{}')
            setSaveTracks(local)
        }
    }, [])

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
    }, [audio.current, volumen])

    useEffect(() => {
        if (Object.keys(tracks).length > 0) {
            localStorage.setItem(
                'tracks',
                JSON.stringify({ ...tracks, position: tracks.position })
            )
        }
    }, [tracks])
    useEffect(() => {
        if (Object.keys(saveTracks).length > 0) {
            localStorage.setItem(
                'tracks',
                JSON.stringify({ ...saveTracks, position: saveTracks.position })
            )
        }
    }, [saveTracks])

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
                    <audio
                        ref={audio}
                        preload="auto"
                        onEnded={() => setPlaying(false)}
                    >
                        <source src={track?.preview_url} type="audio/mpeg" />
                    </audio>
                    <SSong.SongPlayerIcons>
                        <SSong.SongButton
                            onClick={() => {
                                if (tracks?.position) {
                                    setTracks({
                                        ...tracks,
                                        position:
                                            tracks.position <= 0
                                                ? tracks.tracks.length - 1
                                                : tracks.position - 1,
                                    })
                                } else {
                                    setSaveTracks({
                                        ...saveTracks,
                                        position:
                                            saveTracks.position <= 0
                                                ? saveTracks.tracks.length - 1
                                                : saveTracks.position - 1,
                                    })
                                }
                            }}
                        >
                            {<GetIcon name="back" />}
                        </SSong.SongButton>
                        <SSong.SongButton
                            onClick={() => {
                                playing ? handlePause() : handlePlay()
                            }}
                        >
                            <GetPlayerIcons name={playing ? 'pause' : 'play'} />
                        </SSong.SongButton>
                        <SSong.SongButton
                            onClick={() => {
                                if (tracks?.position) {
                                    setTracks({
                                        ...tracks,
                                        position:
                                            tracks.position >=
                                            tracks.tracks.length - 1
                                                ? 0
                                                : tracks.position + 1,
                                    })
                                } else {
                                    setSaveTracks({
                                        ...saveTracks,
                                        position:
                                            saveTracks.position >=
                                            saveTracks.tracks.length - 1
                                                ? 0
                                                : saveTracks.position + 1,
                                    })
                                }
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
