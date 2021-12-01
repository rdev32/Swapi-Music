export const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
export const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
export const baseUrl = 'https://accounts.spotify.com/authorize'
export const redirect = 'https://swapimusic.herokuapp.com/Home'
export const Scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-follow-read',
    'user-library-read',
    'user-read-private',
]
export const ScopesUrlParams = Scopes.join('%20')
