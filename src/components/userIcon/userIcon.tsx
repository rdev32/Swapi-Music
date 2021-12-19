import Link from "next/link";
import { FC, useContext } from "react";
import { User } from "../../hooks/types/GetUserProfile";
import useActiveOptContext from "../../hooks/useActiveOptContext/useActiveOptContext";
import * as S from "../../styles/components/userIcon/userIcon.style";

const UserIcon: FC<{ user: User }> = ({ user }) => {
  const { setActive } = useContext(useActiveOptContext);

  return (
    <Link href="/user" passHref>
      <S.UserIconStyle onClick={() => setActive("")}>
        {user?.images?.map((img) => (
          <S.UserIconImage
            key={img.url}
            src={img.url || ""}
            alt={user?.display_name}
            width={50}
            height={50}
          />
        ))}
      </S.UserIconStyle>
    </Link>
  );
};

export default UserIcon;
