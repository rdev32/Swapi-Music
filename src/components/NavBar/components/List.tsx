import { FC, useContext } from 'react'
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../../styles/components/NavBar/components/ListS'
import AtomIcon from '../../SvgDynamic/SvgDynamic'

interface IProps {
    Section: {
        id: string
        name: string
        path: string
    }[]
    Title: string
    icon?: string
}
const List: FC<IProps> = ({ Section, Title, icon }) => {
    const { active, setActive } = useContext(useActiveOptContext)
    console.log(active)

    return (
        <>
            {Section?.length > 0 && (
                <S.ItemDiv>
                    <S.ItemTitle>{Title}</S.ItemTitle>
                    {Section.map((options) => (
                        <S.ItemLink
                            key={options.id}
                            href={`${options.path.replace(/\s+/g, '')}`}
                            passHref
                        >
                            <S.ItemList
                                active={
                                    active.replace(/\s+/g, '') ===
                                    options.path.replace(/\s+/g, '')
                                        ? true
                                        : false
                                }
                                onClick={() => setActive(options.path)}
                            >
                                <AtomIcon
                                    active={
                                        active.replace(/\s+/g, '') ===
                                        options.path.replace(/\s+/g, '')
                                            ? true
                                            : false
                                    }
                                    name={icon || options.name}
                                >
                                    <S.ItemPhrase>
                                        {options.name.length > 12
                                            ? options.name.slice(0, 11) + '...'
                                            : options.name}
                                    </S.ItemPhrase>
                                </AtomIcon>
                            </S.ItemList>
                        </S.ItemLink>
                    ))}
                </S.ItemDiv>
            )}
        </>
    )
}

export default List
