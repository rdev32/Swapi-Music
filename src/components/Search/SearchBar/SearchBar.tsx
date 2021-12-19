import dynamic from "next/dynamic";
import {
  ChangeEventHandler,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
} from "react";
import {
  FormCancel,
  FormInputStyle,
  FormStyle,
} from "../../../styles/components/Search/SearchBar.style";

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setMount: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: FC<IProps> = ({ onChange, value, setSearch, setMount }) => {
  const SearchIcon = useMemo(
    () => dynamic(() => import("../../../../public/icons/search/Search.svg")),
    []
  );
  const CancelIcon = useMemo(
    () => dynamic(() => import("../../../../public/icons/search/Cancel.svg")),
    []
  );
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
        <FormCancel
          type="button"
          onClick={() => {
            setSearch("");
            setMount(false);
          }}
        >
          <CancelIcon />
        </FormCancel>
      )}
    </FormStyle>
  );
};

export default SearchBar;
