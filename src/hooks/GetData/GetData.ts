import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

function GetData<Type>(url: string) {
    const [data, setData] = useState<Type>({} as Type)
    const router = useRouter()
    useEffect(() => {
        url &&
            axios
                .get(url, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    },
                })
                .then((resp: any | { error: { status: number } }) => {
                    if (resp?.error?.status === 401) {
                        router.replace('/')
                    } else {
                        setData(resp.data)
                    }
                    // setData(resp.data)
                })
                .catch((err) => console.log(err))
    }, [url])
    return data
}

export default GetData
