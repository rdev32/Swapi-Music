import { createContext, Dispatch, SetStateAction } from "react";
import { Tracks } from "../../hooks/UserTrackContext/types";
import { GetPlaylist } from "../types/GetCurrentUserPlaylist";
import { User } from "../types/GetUserProfile";

type Payload = {
  id: string;
  tag: string;
  type: string;
  image: string;
  url: string;
};

export type StateActions = {
  type: string;
  payload: Payload;
};

interface IProps {
  tracks: Tracks;
  user: User;
  playlists?: GetPlaylist[];
  setTracks: Dispatch<SetStateAction<Tracks>>;
  recent: Payload[];
  setRecent: Dispatch<SetStateAction<Payload[]>>;
}

const UserContext = createContext<IProps>({} as IProps);

export default UserContext;
