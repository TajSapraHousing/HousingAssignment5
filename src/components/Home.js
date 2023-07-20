import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../state';
import '../app.css'
export default function Home() {
    const dispatch=useDispatch()
    const data = useSelector(state => state.valueReducer)
    const handleClick=()=>{
        if(data=='World'){
            dispatch(Creators.changeVal())
        }
        else{
            dispatch(Creators.resetVal())
        }
    }
    return (
        <div className='mainContent'>
            Hello {data}
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}