import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Item, Items } from "../interfaces/items"
import { RootState } from "../store"

const initialState = {
    items: [] as Items,
}

export const inventarioSlice = createSlice({
    name: "inventario",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload)
        },
    },
})
export const { addItem } = inventarioSlice.actions
export const selectItems = (state: RootState) => state.inventario.items
export default inventarioSlice.reducer
