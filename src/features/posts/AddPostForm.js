import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'


const AddPostForm = () =>
{
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => 
    {
        if (title && content)
        {
            dispatch(
                postAdded(title, content)
            )
        }

        setTitle('')
        setContent('')
    }

    const onSubmitHandler = (e) => 
    {
        e.preventDefault()
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="postTitle">Post Title: </label>
                <input
                    type="text"
                    name="postTitle"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content: </label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    onClick={onSavePostClicked}
                >
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm