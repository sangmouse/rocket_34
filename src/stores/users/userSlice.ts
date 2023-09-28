import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
    id: string
    name: string
}

interface InitialState {
    username: string
    users: Array<User>
    status: string
}

const initialState: InitialState = {
    username: "trần trung thi",
    users: [],
    status: "successed"
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeUsername(state) {
            if (state.username == "trần trung thi") {
                state.username = "nguyễn hoàng anh"
            } else {
                state.username = "trần trung thi"
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, function (state, action) {
            state.status = "loading"
        })
        builder.addCase(fetchUsers.fulfilled, function (state, action) {
            state.status = "successed"
            state.users = state.users.concat(action.payload.data)
        })
        builder.addCase(fetchUsers.rejected, function (state, action) {
            state.status = "failed"
        })
    }
})

export const fetchUsers = createAsyncThunk("users/fetchUsers", async function () {
    const users = axios.get("http://localhost:3000/users")
    return users
})

export const { changeUsername } = userSlice.actions;
export default userSlice.reducer;