import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: "MenuSlice",
    initialState:{value:true},
    reducers:{
        show:(state)=>{
            state.value = false
        },
        hide:(state)=>{
            state.value = true
        }
    }
})

export const {show,hide} = MenuSlice.actions;
export default MenuSlice.reducer;