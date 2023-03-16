import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [
    {
        id: '1',
        title: 'Microsoft',
        content: 'Bill Gates is a bitch nigga',
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: '2',
        title: 'Meta',
        content: 'Mark Zuckerburg is scary',
        date: sub(new Date(), { minutes: 5 }).toISOString()
    }
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action)
            {
                state.push(action.payload)
            },
            prepare(title, content, userId)
            {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

const postsReducer = postSlice.reducer

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions

export default postsReducer