import axios from 'axios'
import { useEffect, useState } from 'react'

function GetData<Type>(url: string) {
    const [data, setData] = useState<Type>({} as Type)
    useEffect(() => {
        url &&
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
    }, [url])
    return data
}

export default GetData
