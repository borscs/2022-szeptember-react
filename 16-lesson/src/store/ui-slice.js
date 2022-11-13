import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { carIsVisible: false },
    reducers: {
        toggle(state){
            state.carIsVisible = !state.carIsVisible;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;
