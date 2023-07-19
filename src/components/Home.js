import React, { useState } from 'react'
import '../app.css'
export default function Home() {
    const [data, setData]=useState('World')
    const handleClick=()=>{
        if(data==='World'){
            setData('Taj')
        }
        else{
            setData('World')
        }
    }
    return (
        <div className='mainContent'>
            Hello {data}
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}
