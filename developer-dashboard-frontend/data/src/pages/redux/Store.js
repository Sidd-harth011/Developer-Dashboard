import {configureStore} from '@reduxjs/toolkit'
import MenuSlice from "./MenuSlice"

const Store = configureStore({
    reducer:{
        menu:MenuSlice,
    }
})

export default Store