export interface IDataImgUser {
    url: string | undefined
    height?: number
    width?: number
    displayName?: string
    bradius?: number | undefined | string
    size?: number
    name?: string
}

export type User = {
    display_name: string
    external_urls: {
        spotify: string
    }
    followers: {
        href: string
        total: number
    }
    href: string
    id: string
    images: IDataImgUser[]
    type: string
    uri: string
}
