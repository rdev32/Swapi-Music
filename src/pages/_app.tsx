import { Global } from '@emotion/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import AppHead from '../components/Head/Head'
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext'
import { Tracks } from '../hooks/UserTrackContext/types'
import UserTrackContext from '../hooks/UserTrackContext/UserTrackContext'
import Layout from '../Layout/Layout'
import '../styles/globals.css'
import { Materialize } from '../styles/Normalize'

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
    router,
}: AppProps) {
    const [tracks, setTracks] = useState<Tracks>({} as Tracks)
    const [active, setActive] = useState(
        router.pathname.replace(/\s+/g, '').substring(0, 999999)
    )
    console.log(tracks)

    return (
        <SessionProvider session={session}>
            <useActiveOptContext.Provider value={{ active, setActive }}>
                <AppHead title="SwapiMusic" />
                <Global styles={Materialize} />
                <UserTrackContext.Provider value={{ tracks, setTracks }}>
                    <Layout router={router}>
                        <Component {...pageProps} />
                    </Layout>
                </UserTrackContext.Provider>
            </useActiveOptContext.Provider>
        </SessionProvider>
    )
}

export default MyApp
