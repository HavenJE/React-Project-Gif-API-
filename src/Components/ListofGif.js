import React from 'react'
import { } from 'react-bootstrap';
import GifComponent from './GifComponent'

// import LikerCounter from '../Components/LikerCounter'

const ListofGif = ({ fetchedImage, gif }) => {
    // to avoid .props nesting, we used {fetchedImage}

    // const clearMyGifsList = ()=> {
    //     console.log("clearMyGifsList is working");
    //     (1 + 1 === 2) ? <div>The list has been cleared!</div> : <p>Please Wait...</p>  
    // }

    return (
        <div >
            <div className="gifDisplay" >
                {fetchedImage.map((gif) => {
                    return (
                        <GifComponent gif={gif}/> 
                    )
                }
                )}
            </div>
            {/* <p htmlFor="clear">
                <button type="reset" onClick={clearMyGifsList} className="clear-GifList" > Clear Your Gif List </button>
            </p> */}
        </div>

    )
}
export default ListofGif

// className ="d-inline-block "