import React from 'react'
import {useLocation} from 'react-router-dom'

const Home = () =>{
debugger
    const location = useLocation()
    return(<>
        <h1 style={{color:'crimson'}}>חוויות מלחמה</h1>
        </>
    )
}

export default Home