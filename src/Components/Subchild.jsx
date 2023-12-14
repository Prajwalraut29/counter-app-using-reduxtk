import React from 'react'
import { useDispatch } from 'react-redux';
import { decrement } from './Counter/Countslice';
import { increment } from './Counter/Countslice';

const Subchild = () => {
 const dispatch = useDispatch()
  return (
    <div>
    <button onClick={() => dispatch(decrement())}>decrement </button>
    <button onClick={() => dispatch(increment())}> increment </button>
     
    </div>
  )
}

export default Subchild
