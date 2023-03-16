import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [
    {
        id: '1',
        title: 'Microsoft',
        content: 'Bill Gates is a bitch nigga',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    {
        id: '2',
        title: 'Meta',
        content: 'Mark Zuckerburg is scary',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
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
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action)
        {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)

            if (existingPost)
            {
                existingPost.reactions[reaction]++
            }
        }
    }
})

const postsReducer = postSlice.reducer

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions

export default postsReducer