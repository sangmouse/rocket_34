import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "stores/counter/counterSlice"
import usersReducer from "stores/users/userSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer
    }
})

export default store


export type RootState = ReturnType<typeof store.getState>