import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import { domain } from '../../assets/spotify'
import GetData from '../../hooks/GetData/GetData'
import { IDataUser } from '../../hooks/types/GetUserProfile'
import useActiveOptContext from '../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../styles/components/ToUserPage/ToUserPage.style'

const ButtonUser: FC = () => {
    const { setActive } = useContext(useActiveOptContext)
    const data = GetData<IDataUser>(domain)
    const router = useRouter()

    const handleRedirect = () => {
        router.push(`/profile`)
        setActive('')
    }

    return (
        <S.UserPage onClick={handleRedirect}>
            {data?.images?.map((img) => (
                <S.UserImg
                    key={img.url}
                    src={img.url}
                    alt={data?.display_name}
                    width={40}
                    height={40}
                />
            ))}
        </S.UserPage>
    )
}

export default ButtonUser
