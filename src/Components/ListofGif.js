// import React from 'react'

const ListofGif = ({fetchedImage}) => {
    // to avoid .props nesting, we used {fetchedImage}
    
       return (
            <div className="gifsList">
                {fetchedImage.map(gif => <img src={gif} className="gifDisplay" alt="gifs-images"/>)}
            </div>
        ) 
} 
export default ListofGif