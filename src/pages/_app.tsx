/* eslint-disable react-hooks/rules-of-hooks */
import { Global } from '@emotion/react'
import Cookies from 'js-cookie'
import type { AppProps } from 'next/app'
import { useLayoutEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import AppHead from '../components/Head/Head'
import useActiveOptContext from '../hooks/useActiveOptContext/useActiveOptContext'
import Layout from '../Layout/Layout'
import '../styles/globals.css'
import { Materialize } from '../styles/Normalize'
// import initUser from '../assets/user.json'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
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
            <Layout router={router}>
                <Component {...pageProps} />
            </Layout>
        </useActiveOptContext.Provider>
    )
}

export default MyApp
