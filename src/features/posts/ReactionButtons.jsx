import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'


const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '💓',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) =>
{
    const dispatch = useDispatch()

    return (
        <div>ReactionButtons</div>
    )
}

export default ReactionButtons