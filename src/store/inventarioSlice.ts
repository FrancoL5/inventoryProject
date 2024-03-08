import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Item, Items } from "../interfaces/items"

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

export default inventarioSlice.reducer
