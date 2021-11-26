export const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
export const baseUrl = 'https://accounts.spotify.com/authorize'
export const redirect = 'http://localhost:3000/Home'
export const Scopes = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-follow-read',
    'user-library-read',
]
export const ScopesUrlParams = Scopes.join('%20')
