import { createContext, Dispatch, SetStateAction } from 'react';

interface IProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const useActiveOptContext = createContext<IProps>({} as IProps);

export default useActiveOptContext;
