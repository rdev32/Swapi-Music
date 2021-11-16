import { FC } from 'react';
import Image from 'next/image';
import * as S from '../../../../styles/components/NavBar/components/Title/Title.S';
interface IProps {}

const Title: FC<IProps> = (props) => {
  return (
    <S.ItemBox>
      <Image
        src="/icons/NavBar/swagger.svg"
        alt="SwaggerMusicIcon"
        width={25}
        height={25}
      />
      <h1>Swagger </h1>
    </S.ItemBox>
  );
};

export default Title;
