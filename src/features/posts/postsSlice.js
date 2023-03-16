import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '1',
        title: 'Microsoft',
        content: 'Bill Gates is a bitch nigga'
    },
    {
        id: '2',
        title: 'Meta',
        content: 'Mark Zuckerburg is scary'
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
                        content
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