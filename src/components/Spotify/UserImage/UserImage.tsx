import { FC } from 'react'
import Image from 'next/image'
import { IDataImgUser } from '../../../hooks/types/GetUserProfile'
import styled from '@emotion/styled'
import withoutimg from '/playlist/withoutimg.jpg'
import { css } from '@emotion/react'

const UImage = styled(Image)`
    border-radius: ${({ bradius }: { bradius: number | undefined }) =>
        `${bradius}px`};
    object-fit: cover;
    z-index: 0;
`
const UserImage: FC<IDataImgUser> = ({
    url,
    displayName,
    bradius,
    size,
    width,
    height,
    linear,
}) => {
    return (
        <UImage
            bradius={bradius}
            src={url || '/playlist/withoutimg.jpg'}
            alt={displayName}
            width={size || width || 180}
            height={size || height || 180}
        />
    )
}

export default UserImage
