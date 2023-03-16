import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: "Stringer Bell" },
    { id: '1', name: "Avon Barksdale" },
    { id: '2', name: "Omar Little" },
]


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