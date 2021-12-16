import { IAction, IActions, IPlayer } from '../types/types'

const reducer = (state: IPlayer, action: IAction): IPlayer => {
    switch (action.type) {
        case IActions.ON_Play:
            return { ...state, play: action.payload.play }
        case IActions.ON_Repeat:
            return { ...state, repeat: action.payload.repeat }
        case IActions.ON_Aleatory:
            return { ...state, aleatory: action.payload.aleatory }
        case IActions.ON_Volumen:
            return { ...state, volumen: action.payload.volumen }
        case IActions.ON_Loop:
            return { ...state, loop: action.payload.loop }
        default:
            return state
    }
}
export default reducer
