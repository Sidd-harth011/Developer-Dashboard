import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"UserSlice",
    initialState:{user:{
        name:"xx",
        email:"xx",
        password:"xx",
        city:"xx",
        number:"xx",
        image:"xx"
    }},
    reducers:{
        add:(state,action)=>{
            state.user = {...state.user,...action.payload}
            // state.value.name = action.payload.Name;
            // state.value.email =  action.payload.Email;
            // state.value.number = action.payload.Number;
            // state.value.city = action.payload.City;
            // state.value.image = action.payload.Image
        }
    }
})

export const {add} = UserSlice.actions;
export default UserSlice.reducer;
