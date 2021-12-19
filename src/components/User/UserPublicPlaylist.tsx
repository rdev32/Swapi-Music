import { FC, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import PlayList from "../../components/Spotify/Playlist/PlayList";
import { GetPlaylist } from "../../hooks/types/GetCurrentUserPlaylist";
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";
import * as SSwiper from "../../styles/components/albums/Swiper/SwiperContainer.style";
import * as SSearch from "../../styles/pages/Search/Search.style";
import typeSizeCreen from "../Albums/helpers/typeSizeCreen";

const UserPublicPlaylist: FC<{ title: string; data?: GetPlaylist[] }> = ({
  title,
  data,
}) => {
  const [screenItems, setScreenItems] = useState(7);
  const sizeScreen = useWindowSize();
  useEffect(() => setScreenItems(typeSizeCreen(sizeScreen)), [sizeScreen]);
  return (
    { data } && (
      <>
        <SSearch.SearchTitleCategory>{title}</SSearch.SearchTitleCategory>
        <SSwiper.SwiperContainer>
          <SSwiper.SwiperMain
            className="mySwiper"
            modules={[Navigation]}
            navigation
            spaceBetween={1}
            slidesPerView={screenItems}
          >
            {data?.map((playlist) => (
              <SwiperSlide key={playlist.id}>
                <PlayList key={playlist.id} playlist={playlist} />
              </SwiperSlide>
            ))}
          </SSwiper.SwiperMain>
        </SSwiper.SwiperContainer>
      </>
    )
  );
};

export default UserPublicPlaylist;
