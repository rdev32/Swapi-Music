import dynamic from 'next/dynamic'
import {
    ChangeEventHandler,
    Dispatch,
    FC,
    SetStateAction,
    useMemo,
    useState,
} from 'react'
import {
    FormCancel,
    FormInputStyle,
    FormStyle,
} from '../../../styles/components/Search/SearchBar.style'

import das from '../../../../public/icons/search/Search.svg'

interface IProps {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string
    setSearch: Dispatch<SetStateAction<string>>
}

const SearchBar: FC<IProps> = ({ onChange, value, setSearch }) => {
    const SearchIcon = useMemo(
        () =>
            dynamic(() => import('../../../../public/icons/search/Search.svg')),
        []
    )
    const CancelIcon = useMemo(
        () =>
            dynamic(() => import('../../../../public/icons/search/Cancel.svg')),
        []
    )
    return (
        <FormStyle>
            <SearchIcon />
            <FormInputStyle
                type="text"
                placeholder="Search"
                value={value}
                onChange={onChange}
            />
            {value && (
                <FormCancel type="button" onClick={() => setSearch('')}>
                    <CancelIcon />
                </FormCancel>
            )}
        </FormStyle>
    )
}

export default SearchBar
