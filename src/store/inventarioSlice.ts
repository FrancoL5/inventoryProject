import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { Item, ItemWithID, ItemsWithID } from "../interfaces/items"
import { RootState } from "../store"

const initialState = {
    items: [] as ItemsWithID,
    lastId: 0 as number,
}

export const inventarioSlice = createSlice({
    name: "inventario",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.lastId += 1
            state.items.push({ ...action.payload, id: state.lastId })
        },
        updateItems: (state, action: PayloadAction<ItemWithID>) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        },
        markSelectItem: (
            state,
            action: PayloadAction<{ id: number; select: boolean }>
        ) => {
            const itemFind = state.items.find(
                (item) => item.id === action.payload.id
            )

            if (itemFind) {
                itemFind.selected = action.payload.select
            }
        },
        markSelectAll: (state, action: PayloadAction<boolean>) => {
            state.items = state.items.map((item) => {
                return { ...item, selected: action.payload }
            })
        },
    },
})
export const { addItem, markSelectItem, markSelectAll, updateItems } =
    inventarioSlice.actions
export const selectItems = (state: RootState) => state.inventario.items

export const selectMarkItems = createSelector(
    [(state: RootState) => state.inventario.items],
    (items) => items.filter((item) => item.selected)
)
export default inventarioSlice.reducer
