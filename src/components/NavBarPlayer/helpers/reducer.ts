import { IPlayer, IAction, IActions } from '../types/types'

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
        default:
            return state
    }
}
export default reducer
