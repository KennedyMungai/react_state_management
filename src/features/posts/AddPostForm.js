import React, { useState } from 'react'

const AddPostForm = () =>
{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanges = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    return (
        <div>AddPostForm</div>
    )
}

export default AddPostForm