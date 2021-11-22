import { FC } from 'react';
import Image from 'next/image';
import { IDataImgUser } from '../../../hooks/GetUsersProfile/types';
import styled from '@emotion/styled';

const UImage = styled(Image)`
  border-radius: ${({ bradius }: { bradius: number | undefined }) =>
    `${bradius}%`};
`;
const UserImage: FC<IDataImgUser> = ({ url, displayName, bradius }) => {
  return (
    <UImage
      bradius={bradius}
      src={url}
      alt={displayName}
      width={180}
      height={180}
    />
  );
};

export default UserImage;
