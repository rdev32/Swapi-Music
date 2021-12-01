export interface IDataImgUser {
    url: string | undefined
    height?: number
    width?: number
    displayName?: string
    bradius?: number
    size?: number
    name?: string
}

export interface IDataUser {
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
