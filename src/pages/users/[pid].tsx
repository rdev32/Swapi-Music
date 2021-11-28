import { FC } from 'react'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/profile/profile.style'

interface IProps {}

const User: FC<IProps> = (props) => {
    const router = useRouter()
    const { pid } = router.query

    return (
        <S.UserBody>
            <p>Post: {pid}</p>
        </S.UserBody>
    )
}

export default User
