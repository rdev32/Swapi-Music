import { FC, useContext } from 'react'
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../../styles/components/NavBar/components/ListS'
import AtomIcon from '../../SvgDynamic/SvgDynamic'

interface IProps {
    Section: string[]
    Title: string
}
const List: FC<IProps> = ({ Section, Title }) => {
    const { active, setActive } = useContext(useActiveOptContext)

    return (
        <S.ItemDiv>
            <S.ItemTitle>{Title}</S.ItemTitle>
            {Section.map((opt) => (
                <S.ItemLink
                    key={opt}
                    href={`/${opt.replace(/\s+/g, '')}`}
                    passHref
                >
                    <S.ItemList
                        active={
                            active.replace(/\s+/g, '') ===
                            opt.replace(/\s+/g, '')
                                ? true
                                : false
                        }
                        onClick={() => setActive(opt)}
                    >
                        <AtomIcon
                            active={
                                active.replace(/\s+/g, '') ===
                                opt.replace(/\s+/g, '')
                                    ? true
                                    : false
                            }
                            name={opt}
                        >
                            <S.ItemPhrase>{opt}</S.ItemPhrase>
                        </AtomIcon>
                    </S.ItemList>
                </S.ItemLink>
            ))}
        </S.ItemDiv>
    )
}

export default List
