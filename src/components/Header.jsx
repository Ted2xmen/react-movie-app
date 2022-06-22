import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/counter/counterSlice'

const Header = () => {
  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleD = () => {
    dispatch(increment())
  }

  useEffect(() => {}, [dispatch, value])
  
  return (
    <div>
      {value}
      <button onClick={handleD} className=" m-4 border-2 border-black p-2">
        arttır
      </button>
    </div>
  )
}

export default Header
