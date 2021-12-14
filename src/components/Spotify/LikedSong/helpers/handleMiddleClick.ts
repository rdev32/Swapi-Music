import { Dispatch } from 'react'

export type HomeRecent = {
    id: string
    tag: string
    type: string
    image: string
    url: string
}

const handleMiddleClick = (
    payload: any,
    recent: HomeRecent[],
    setRecent: Dispatch<HomeRecent[]>
) => {
    if (recent.find((item) => item.id === payload.id)) {
        return
    } else if (recent.length < 6) {
        setRecent([payload, ...recent])
    } else {
        setRecent([payload, ...recent.slice(0, 6)])
    }
}

export default handleMiddleClick
