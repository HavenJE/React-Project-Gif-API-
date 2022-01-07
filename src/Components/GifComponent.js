
import LikerCounter from './LikerCounter'
import { v4 } from 'uuid'
import React, { useState } from 'react'

const GifComponent = ({ gif }) => {
    const [counter, setCounter] = useState(0)
   
    return (
        <div className='gifsList'>
            <div key={v4()}>
                <img className="gifImage" src={gif} alt="gifs-images" />
                {/* <LikerCounter counter={counter} setCounter={setCounter} gif={gif} /> */}
            </div>
        </div>
    )
}
export default GifComponent 