import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const userSlice = createSlice(
    {
        name: "users",
        initialState,
        reducers: {

        }
    }
)

const userReducer = userSlice.reducer

export const selectAllUsers = (state) => state.users

export default userReducer