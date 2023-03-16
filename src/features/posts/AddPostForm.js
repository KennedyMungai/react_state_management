import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { postAdded } from './postsSlice'


const AddPostForm = () =>
{
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => 
    {
        if (title && content)
        {
            dispatch(
                postAdded(title, content, userId)
            )
        }

        setTitle('')
        setContent('')
    }

    const userOptions = users.map((user) => (
        <option
            value={user.id}
            key={user.id}
        >
            {user.name}
        </option>
    ))

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
                <select
                    name="postAuthor"
                    id="postAuthor"
                    onChange={onAuthorChanged}
                >
                    {userOptions}
                </select>
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