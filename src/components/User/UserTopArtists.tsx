import { FC, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import { domain } from "../../assets/spotify";
import GetData from "../../hooks/GetData/GetData";
import { Artist, Artists } from "../../hooks/types/GetTopArtist";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import * as SSwiper from "../../styles/components/albums/Swiper/SwiperContainer.style";
import * as S from "../../styles/components/User/Following.style";
import typeSizeCreen from "../Albums/helpers/typeSizeCreen";
import ArtistCard from "../Artist/Artist";
const UserArtists: FC<{ title?: string }> = ({ title }) => {
  const { items } = GetData<Artists>(`${domain}/top/artists?limit=10&offset=0`);
  const [screenItems, setScreenItems] = useState(7);
  const sizeScreen = useWindowSize();
  useEffect(() => setScreenItems(typeSizeCreen(sizeScreen)), [sizeScreen]);

  return (
    { items } && (
      <S.BoxStyle>
        <h2>{title || "Top artists this month"}</h2>
        <SSwiper.SwiperContainer>
          <SSwiper.SwiperMain
            className="mySwiper"
            modules={[Navigation]}
            navigation
            spaceBetween={1}
            slidesPerView={screenItems}
          >
            {items?.map((item: Artist) => (
              <SwiperSlide key={item.id}>
                <ArtistCard item={item} key={item.id} />
              </SwiperSlide>
            ))}
          </SSwiper.SwiperMain>
        </SSwiper.SwiperContainer>
      </S.BoxStyle>
    )
  );
};

export default UserArtists;
