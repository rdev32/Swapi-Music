import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useMemo } from 'react'
import { IDataImgUser } from '../../../hooks/types/GetUserProfile'

const UImage = styled(Image)`
    border-radius: ${({ bradius }: { bradius: number | undefined }) =>
        `${bradius}px`};
    object-fit: cover;
    z-index: 0;
`

const DynamicUserImage = styled.div`
    height: 180px;
    width: 180px;
`
const UserImage: FC<IDataImgUser> = ({
    url,
    displayName,
    bradius,
    size,
    width,
    height,
    name,
}) => {
    // const DynamicIcon = dynamic(() => import(`/icons/${name}.svg`))

    return (
        <>
            {url && (
                <UImage
                    bradius={bradius}
                    src={url}
                    alt={displayName}
                    width={size || width || 180}
                    height={size || height || 180}
                />
            )}
            {!url && (
                <UImage
                    bradius={bradius}
                    src={`/icons/${name}.svg`}
                    alt={displayName}
                    width={size || width || 180}
                    height={size || height || 180}
                />
            )}
            {/* {!url && (
                <DynamicUserImage>
                    <DynamicIcon />
                </DynamicUserImage>
            )} */}
            {/* {!url && DynamicIcon && <DynamicIcon />} */}
        </>
    )
}

export default UserImage
