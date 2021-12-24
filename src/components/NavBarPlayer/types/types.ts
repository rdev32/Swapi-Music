import { Dispatch, SetStateAction } from "react";
import { Tracks } from "../../../hooks/UserTrackContext/types";

export enum IActions {
  ON_Play = "ON_Play",
  ON_Repeat = "ON_Repeat",
  ON_Aleatory = "ON_Aleatory",
  ON_Volumen = "ON_Volumen",
  ON_Loop = "ON_Loop",
}

export type IPlayer = {
  play: boolean;
  repeat: boolean;
  aleatory: boolean;
  loop: boolean;
  volumen: number;
};
export type IAction = {
  type: IActions;
  payload: IPlayer;
};

export type IPropsPlayer = {
  mini_player?: boolean;
  position?: boolean;
  track?: Tracks;
  setTracks?: Dispatch<SetStateAction<Tracks>>;
};
