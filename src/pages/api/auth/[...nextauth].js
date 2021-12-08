/* eslint-disable import/no-anonymous-default-export */
import NextAuth from "next-auth"
import SpotifyProvider from 'next-auth/providers/spotify';

const options = {
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.display_name,
                    email: profile.email,
                    image: profile.images?.[0]?.url
                }
            },
        }
        )
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/'
    }
}

// export default NextAuth({
//     // Configure one or more authentication providers
//     providers: [
//         SpotifyProvider({
//             clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
//             clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
//         }),
//         // ...add more providers here
//     ],
//     secret: process.env.JWT_SECRET,
//     pages: {
//         signIn: "/",
//     },
// })

export default (req, res) => NextAuth(req, res, options)