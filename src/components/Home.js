import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../state';
import { useNavigate } from 'react-router-dom';
import '../app.css'
export default function Home() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const data = useSelector(state => state.valueReducer)
    const handleClick=()=>{
        if(data=='World'){
            dispatch(Creators.changeVal())
        }
        else{
            dispatch(Creators.resetVal())
        }
    }
    const handleClick2=()=>{
        navigate('/about')
    }
    return (
        <div className='mainContent'>
            Hello {data}
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleClick2}>Lets go</button>
        </div>
    )
}