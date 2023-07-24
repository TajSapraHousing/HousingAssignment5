import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../state';
import { useNavigate } from 'react-router-dom';
import '../app.css'
import styles from '../styles.modules.css'
import styles2 from '../styles2.modules.css'
export default function Home() {
    const buttonclass=`${styles.bttncls} ${styles2.bttncls}`
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
            <button onClick={handleClick} className={buttonclass}>Click Me!</button>
            <button onClick={handleClick2} className={buttonclass}>Lets go</button>
        </div>
    )
}