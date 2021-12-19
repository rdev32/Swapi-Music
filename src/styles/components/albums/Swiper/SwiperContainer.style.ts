import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const SwiperMain = styled(Swiper)`
  width: 100%;
  @media (max-width: 540px) {
    width: 350px;
  }
`;
