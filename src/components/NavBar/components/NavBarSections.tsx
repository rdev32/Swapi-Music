import { FC, useContext } from 'react'
import useActiveOptContext from '../../../hooks/useActiveOptContext/useActiveOptContext'
import * as S from '../../../styles/components/NavBar/components/Section.style'
import AtomIcon from '../../SvgDynamic/SvgDynamic'
import { IProps } from './types'

const NavBarSection: FC<IProps> = ({ Section, Type, icon, styles }) => {
    const { active, setActive } = useContext(useActiveOptContext)

    return (
        <>
            {Section?.length > 0 && (
                <S.Section height={styles?.height} margin={styles?.margin}>
                    <S.SectionTitle>{Type}</S.SectionTitle>
                    {Section.map((options) => (
                        <S.SectionLinks
                            key={options.id}
                            href={`${options.path.replace(/\s+/g, '')}`}
                            passHref
                        >
                            <S.SectionLink
                                margin={styles?.margin}
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
                                    <S.SectionName>
                                        {options.name.length > 14
                                            ? options.name.slice(0, 13) + '...'
                                            : options.name}
                                    </S.SectionName>
                                </AtomIcon>
                            </S.SectionLink>
                        </S.SectionLinks>
                    ))}
                </S.Section>
            )}
        </>
    )
}

export default NavBarSection
