import React from 'react'
import { } from 'react-bootstrap';
import LikerCounter from '../Components/LikerCounter'

const ListofGif = ({ fetchedImage, gif }) => {
    // to avoid .props nesting, we used {fetchedImage}

    // const clearMyGifsList = ()=> {
    //     console.log("clearMyGifsList is working");
    //     (1 + 1 === 2) ? <div>The list has been cleared!</div> : <p>Please Wait...</p>  
    // }

    return (
        <div>
            <div className="gifsList" >
                {fetchedImage.map(gif => <img src={gif} className="gifDisplay" alt="gifs-images"/>)}
                <LikerCounter /> 
            </div>
            {/* <p htmlFor="clear">
                <button type="reset" onClick={clearMyGifsList} className="clear-GifList" > Clear Your Gif List </button>
            </p> */}
        </div>

    )
}
export default ListofGif

