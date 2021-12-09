import { NextPage } from 'next'
import { useContext } from 'react'
import TrackList from '../../components/queue/components/TrackList/TrackList'
import UserTrackContext from '../../hooks/UserTrackContext/UserTrackContext'
import * as S from '../../styles/general/styles'
import * as SSMain from '../../styles/components/Spotify/MainSongs/Main.style'

import Link from 'next/link'
import Track from '../../components/queue/components/Track/Track'

const Queue: NextPage = () => {
    const { tracks } = useContext(UserTrackContext)
    console.log('queue tracks', tracks)

    return (
        <S.StyledContainer>
            <h1>Queue</h1>
            <div>
                <h4>Now Playing</h4>
                <div>
                    {tracks?.tracks
                        ?.filter((track) => track.position === tracks.position)
                        .map((track, index) => (
                            <SSMain.SongCard key={track.id}>
                                <Track
                                    editPosition={1}
                                    key={track.id}
                                    track={track}
                                    index={index}
                                />
                            </SSMain.SongCard>
                        ))}
                </div>
            </div>
            <aside>
                {!tracks.from?.name ? (
                    <h4>Next Up</h4>
                ) : (
                    <h4>
                        Next From:{' '}
                        <Link
                            href={{
                                pathname: `/${tracks?.from?.type}/${tracks?.from?.id}`,
                            }}
                        >
                            <a>{tracks?.from?.name}</a>
                        </Link>
                    </h4>
                )}

                {tracks?.tracks &&
                tracks.position ===
                    tracks?.tracks[tracks.tracks.length - 1].position ? (
                    <h3>Queue is empty :(</h3>
                ) : (
                    <TrackList tracks={tracks.tracks} />
                )}
            </aside>
        </S.StyledContainer>
    )
}

export default Queue
