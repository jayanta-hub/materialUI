/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useState} from 'react'
import { counter } from '../../../store/slice/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mantine/core'

const Counter:React.FC = ():JSX.Element => {
    const dispatch = useDispatch()
    const counterData =
    useSelector((state: any) => state?.counterSlice?.counter) ;
    const [count, setCount] = useState(counterData|| 0)
    const increaseCounter = () => {
        setCount((prv: number)=>prv+1)
        dispatch(counter(count+1))
    }
  return (
    <Button onClick={increaseCounter}>{counterData}</Button>
  )
}

export default Counter