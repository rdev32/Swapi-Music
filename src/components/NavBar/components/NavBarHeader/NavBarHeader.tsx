import { FC } from "react";
import * as S from "../../../../styles/components/NavBar/components/Title/Title.S";
import * as SSlogin from "../../../../styles/pages/auth/login.style";
import { GetIcons } from "../../../Icons/Icons";

const NavBarHeader: FC = () => {
  return (
    <S.ItemBox>
      <S.ItemT>
        <SSlogin.LoginTitle>{<GetIcons />}Swapi</SSlogin.LoginTitle>
      </S.ItemT>
    </S.ItemBox>
  );
};

export default NavBarHeader;
