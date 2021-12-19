type Payload = {
  id?: string;
  tag?: string;
  type?: string;
  image?: string;
  url?: string;
};

export type StateActions = {
  type: string;
  payload: Payload;
};

const reducer = (state: any, action: StateActions) => {
  switch (action.type) {
    case "add_recent":
      return {
        ...state,
        recent: (function () {
          if (
            state?.recent?.find(
              (item: Payload) => item.id === action.payload.id
            )
          ) {
            return state?.recent;
          } else if (state?.recent?.length < 6) {
            return [action.payload, ...state.recent];
          } else {
            return [action.payload, ...state.recent.slice(0, 6)];
          }
        })(),
      };
      break;
    default:
      return state;
  }
};
export default reducer;
