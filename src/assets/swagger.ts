export const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
export const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
export const baseUrl = 'https://accounts.spotify.com/authorize'

export const redirect = 'http://localhost:3000/Home'
export const redirectDeploy = 'https://swapimusic.herokuapp.com/Home'

export const getLocalMode = (local: boolean) => {
    return local ? redirect : redirectDeploy
}
export const Scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-follow-read',
    'user-library-read',
    'user-read-private',
]
export const ScopesUrlParams = Scopes.join('%20')
