import Link from "next/link";
import * as Swapi from "../../assets/swapi";
import * as S from "../../styles/pages/auth/login.style";

//FALSE DEPLOY
//TRUE DEV


const Buttons = ({ button }: { button: string }) => {
  const url_redirect = `${Swapi.baseUrl}?client_id=${
    Swapi.clientId
  }&redirect_uri=${Swapi.modeDev(false)}&scope=${
    Swapi.ScopesUrlParams
  }&response_type=token&show_dialog=true`;
  const url_spotify = "https://www.spotify.com/gt/";
  return (
    <Link
      href={button === "Login" ? url_redirect : url_spotify}
      key={button}
      passHref
    >
      <S.Buttons>{button}</S.Buttons>
    </Link>
  );
};

export default Buttons;
