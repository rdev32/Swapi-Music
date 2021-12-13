export enum IActions {
    ON_Play = 'ON_Play',
    ON_Repeat = 'ON_Repeat',
    ON_Aleatory = 'ON_Aleatory',
    ON_Volumen = 'ON_Volumen',
}

export type IPlayer = {
    play: boolean
    repeat: boolean
    aleatory: boolean
    volumen: number
}
export type IAction = {
    type: IActions
    payload: IPlayer
}
