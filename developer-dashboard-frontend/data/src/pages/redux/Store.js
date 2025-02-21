import {configureStore} from '@reduxjs/toolkit'
import MenuSlice from "./MenuSlice"
import UserSlice from './UserSlice'

const Store = configureStore({
    reducer:{
        menu:MenuSlice,
        UserSlice:UserSlice
    }
})

export default Store