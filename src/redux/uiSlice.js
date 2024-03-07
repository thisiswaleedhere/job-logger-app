import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { show: false },
    reducers: {
        stateAddModal: (state, action) => {
            state.show = action.payload;
        }
    }
})

export default uiSlice.reducer;
export const { stateAddModal } = uiSlice.actions;