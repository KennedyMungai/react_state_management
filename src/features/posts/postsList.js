import React from 'react'
import { useSelector } from 'react-redux'


const postsList = () =>
{
    const posts = useSelector(state => state.posts)

    return (
        <div>postsList</div>
    )
}

export default postsList