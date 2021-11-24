import { FC } from 'react'
import Image from 'next/image'
import { IDataImgUser } from '../../../hooks/types/GetUserProfile'
import styled from '@emotion/styled'

const UImage = styled(Image)`
    border-radius: ${({ bradius }: { bradius: number | undefined }) =>
        `${bradius}%`};
`
const UserImage: FC<IDataImgUser> = ({ url, displayName, bradius, size }) => {
    return (
        <UImage
            bradius={bradius}
            src={url}
            alt={displayName}
            width={size || 180}
            height={size || 180}
        />
    )
}

export default UserImage
