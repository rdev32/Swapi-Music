import { FC } from 'react'

interface IProps {}

const GetSalute: FC<IProps> = (props) => {
    const hour = new Date().getHours()
    if (hour >= 6 && hour < 12) {
        return <h1>Good Morning</h1>
    } else if (hour >= 12 && hour < 18) {
        return <h1>Good Afternoon</h1>
    } else {
        return <h1>Good Evening</h1>
    }
}

export default GetSalute
