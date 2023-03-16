import React from 'react'
import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/postsList'

const App = () =>
{
    return (
        <div>
            <AddPostForm />
            <PostsList />
        </div>
    )
}

export default App