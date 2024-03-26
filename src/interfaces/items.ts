export interface Item {
    width: number
    height: number
    depth: number
    name: string
    code: string
}
export interface ItemWithID extends Item {
    id: number
    selected?: boolean
}
export type Items = Item[]
export type ItemsWithID = ItemWithID[]
