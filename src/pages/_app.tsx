import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import AppHead from '../components/Head/Head'
import Layout from '../components/Layout/Layout'
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext'
import UserTrackContext from '../hooks/UserTrackContext/UserTrackContext'
import '../styles/globals.css'
import { Materialize } from '../styles/Normalize'

type Tracks = {
    position: number
    tracks: {
        id: string
    }[]
}

function MyApp({ Component, pageProps, router }: AppProps) {
    const [tracks, setTracks] = useState<Tracks>({} as Tracks)
    const [active, setActive] = useState(
        router.pathname.replace(/\s+/g, '').substring(0, 999999)
    )

    return (
        <useActiveOptContext.Provider value={{ active, setActive }}>
            <AppHead title="SwapiMusic" />
            <Global styles={Materialize} />
            <UserTrackContext.Provider value={{ tracks, setTracks }}>
                <Layout router={router}>
                    <Component {...pageProps} />
                </Layout>
            </UserTrackContext.Provider>
        </useActiveOptContext.Provider>
    )
}

export default MyApp
