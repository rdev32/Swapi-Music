import { Tracks } from '../../../hooks/UserTrackContext/types'

const GetUrl = (getTrack: Tracks) => {
    const url =
        getTrack?.tracks && getTrack?.tracks[getTrack.position]?.id
            ? `https://api.spotify.com/v1/tracks/${
                  getTrack?.tracks[getTrack.position]?.id
              }`
            : ''

    return url
}
export default GetUrl
