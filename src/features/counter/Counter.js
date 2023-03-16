import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counterSlice'


const Counter = () =>
{
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0

    const resetAll = () =>
    {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <section>
            <p>{count}</p>
            <div className="">
                <button
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <button
                    onClick={resetAll}
                >
                    Reset
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div className="">
                <button
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    Increment By 10
                </button>
            </div>
        </section>
    )
}

export default Counter