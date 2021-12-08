import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
})

const UseSpotify = () => {
    const { data: session, status } = useSession()
    useEffect(() => {
        if (session) {
            if (session.error === 'RefreshAccessTokenFailed') {
                signIn()
            }
            spotifyApi.setAccessToken(session.user.accessToken)
        }
    }, [session])
    return spotifyApi
}

export default UseSpotify
