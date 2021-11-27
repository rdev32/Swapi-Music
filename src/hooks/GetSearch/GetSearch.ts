import axios from 'axios'
import { useEffect, useState } from 'react'

function GetSearch<Type>(search: string) {
    const [data, setData] = useState<Type>({} as Type)
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const handler = () => {
            const url = `https://api.spotify.com/v1/search?&include_external=audio&q=${search}&type=album,track,artist,playlist,episode,show`
            axios
                .get(url, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                })
                .then((resp) => setData(resp.data))
                .catch((err) => console.log(err))
        }
        if (count === 20 && search !== '') {
            handler()
        }
    }, [count])

    useEffect(() => {
        const handler = setTimeout(() => {
            if (search !== '' && count < 20) {
                setCount(count + 1)
            }
        }, 50)
        return () => clearTimeout(handler)
    }, [count, search])
    return { data, setCount }
}

export default GetSearch
