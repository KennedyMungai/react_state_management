import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'


const Counter = () =>
{
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <div>Counter</div>
    )
}

export default Counter