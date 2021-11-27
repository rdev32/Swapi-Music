import { ChangeEventHandler, FC } from 'react'

interface IProps {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string
}

const SearchBar: FC<IProps> = ({ onChange, value }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBar
