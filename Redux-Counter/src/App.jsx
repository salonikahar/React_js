import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/action'

function App() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.count)
  
  return (
    <>
      <button onClick={() =>  dispatch(increment())}>Increment</button>
      {count}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
