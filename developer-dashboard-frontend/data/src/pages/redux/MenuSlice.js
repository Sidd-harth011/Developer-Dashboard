import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: "MenuSlice",
    initialState:{value:""},
    reducers:{
        show:(state)=>{
            state.value = true
        },
        hide:(state)=>{
            state.value = ""
        }
    }
})

export const {show,hide} = MenuSlice.actions;
export default MenuSlice.reducer;