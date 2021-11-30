type ICons = {
    height: number
    width: number
    url: string
}
export type Items = {
    href: string
    icons: ICons[]
    id: string
    name: string
}
export type GetCategories = {
    categories: {
        items: Items[]
    }
}
