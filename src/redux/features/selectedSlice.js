import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selected: [],
}

const selectedSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addItem: (state, action) => { state.selected.push(action.payload) },
        removeItem: (state, action) => { state.selected.splice(action.payload, 1) },
        removeAllItems: (state, action) => { state.selected = [] }
    }
})

export default selectedSlice.reducer;
export const { addItem, removeItem, removeAllItems } = selectedSlice.actions
