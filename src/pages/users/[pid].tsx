import { FC } from 'react'
import { useRouter } from 'next/router'
interface IProps {}

const User: FC<IProps> = (props) => {
    const router = useRouter()
    const { pid } = router.query

    return <p>Post: {pid}</p>
}

export default User
