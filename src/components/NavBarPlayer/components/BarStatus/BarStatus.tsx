import { FC, RefObject } from 'react';
import * as SNavBarPlayer from "../../../../styles/components/NavBarPlayer/NavBarPlayer.style";

interface IProps {
 audio:RefObject<HTMLAudioElement>
}

const FooterBar: FC<IProps> = ({ audio }) => {


  
  return (
    <SNavBarPlayer.NavbarFooterBar>
      <p>
        {Math.round(
          audio.current?.currentTime ? audio.current.currentTime : 0
        ) > 9
          ? `0:${Math.round(
            audio.current?.currentTime ? audio.current.currentTime : 0
          )}`
          : `0:0${Math.round(
            audio.current?.currentTime ? audio.current.currentTime : 0
          )}`}
      </p>
      <input
        type="range"
        name="progress"
        id="progress"
        value={Math.round(Number(audio.current?.currentTime || 0))}
        onChange={(event: any) => {
          if (audio.current) {
            audio.current.currentTime = event.target.value;
          }
        }}
        min="0"
        max="30"
      />
      <p>0:30</p>
    </SNavBarPlayer.NavbarFooterBar>
  );
}


export default FooterBar