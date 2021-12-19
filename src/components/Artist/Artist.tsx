import Link from "next/link";
import { FC, useContext } from "react";
import UserImage from "../../components/Spotify/UserImage/UserImage";
import Characters from "../../helpers/pages/discography/Characters";
import { Artist as ArtistCard } from "../../hooks/types/GetTopArtist";
import UserContext from "../../hooks/UserContext/UserContext";
import * as S from "../../styles/components/User/Following.style";
import { Payload } from "../../types/pages/payload.types";

const ArtistCard: FC<{ item: ArtistCard }> = ({ item }) => {
  const { recent, setRecent } = useContext(UserContext);
  const handleMiddleClick = (payload: Payload) => {
    if (
      recent?.find(
        (item: Payload) => item.id === payload.id || item.tag === payload.tag
      )
    ) {
      return;
    } else if (recent.length < 6) {
      setRecent([payload, ...recent]);
    } else {
      setRecent([payload, ...recent.slice(0, 6)]);
    }
  };
  const payload = () => {
    return {
      id: item.id,
      tag: item.name,
      type: "artist",
      image: item.images[0].url,
      url: `/artist/${item.id}`,
    };
  };

  return (
    <Link
      href={{
        pathname: "/artist/[pid]",
        query: {
          pid: item.id,
        },
      }}
      passHref
    >
      <S.ArtistCard key={item.id} onClick={() => handleMiddleClick(payload())}>
        {item?.images && (
          <UserImage
            key={item?.images[0]?.url}
            url={item?.images[0]?.url}
            bradius={100}
            displayName={item.name}
            size={180}
            name="artistout"
          />
        )}

        <S.ArtistName>{item.name}</S.ArtistName>
        <S.ArtistTag>{Characters(item.type)}</S.ArtistTag>
      </S.ArtistCard>
    </Link>
  );
};

export default ArtistCard;
