/* eslint-disable react-hooks/rules-of-hooks */
import { Global } from '@emotion/react'
import Cookies from 'js-cookie'
import type { AppProps } from 'next/app'
import { useLayoutEffect, useState } from 'react'
import AppHead from '../components/Head/Head'
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext'
import { Tracks } from '../hooks/UserTrackContext/types'
import UserTrackContext from '../hooks/UserTrackContext/UserTrackContext'
import Layout from '../Layout/Layout'
import '../styles/globals.css'
import { Materialize } from '../styles/Normalize'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const [tracks, setTracks] = useState<Tracks>({} as Tracks)
    const [active, setActive] = useState(
        router.pathname.replace(/\s+/g, '').substring(0, 999999)
    )
    useLayoutEffect(() => {
        const cookie = Cookies.get('token')
        if (!cookie) {
            router.push('/')
        }
    }, [])

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
