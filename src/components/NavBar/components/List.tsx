import { Dispatch, FC, SetStateAction, useContext } from 'react';
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext';
import * as S from '../../../styles/components/NavBar/components/ListS';

interface IProps {
  Section: string[];
  Title: string;
  active: {
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
  };
}
const List: FC<IProps> = ({ Section, Title }) => {
  const { active, setActive } = useContext(useActiveOptContext);
  return (
    <S.ItemDiv>
      <S.ItemTitle>{Title}</S.ItemTitle>
      {Section.map((opt) => (
        <S.ItemLink key={opt} href={`/${opt.replace(/\s+/g, '')}`} passHref>
          <S.ItemList
            active={active === opt.replace(/\s+/g, '') ? true : false}
            onClick={() => setActive(opt)}
          >
            {/* {SearchIcon(opt)} */}
            <S.ItemPhrase>{opt}</S.ItemPhrase>
          </S.ItemList>
        </S.ItemLink>
      ))}
    </S.ItemDiv>
  );
};

export default List;
