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

export default userReducer