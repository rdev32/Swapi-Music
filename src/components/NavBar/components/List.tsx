import Image from 'next/image';
import { FC } from 'react';
import * as S from '../../../styles/components/NavBar/components/ListS';

interface IProps {
  Section: string[];
  Title: string;
}

const List: FC<IProps> = ({ Section, Title }) => {
  return (
    <S.ItemUl>
      <S.ItemTitle>{Title}</S.ItemTitle>
      {Section.map((opt) => (
        <S.ItemLink key={opt} href={`/${opt.trim()}`} passHref>
          <S.ItemList>
            <Image
              src={`/icons/NavBar/${opt}.svg`}
              alt={opt}
              width={25}
              height={25}
            />
            <p>{opt}</p>
          </S.ItemList>
        </S.ItemLink>
      ))}
    </S.ItemUl>
  );
};

export default List;
