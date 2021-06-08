import React, { useState } from 'react'
import ListofGif from '../Components/ListofGif'
import SearchGif from '../Components/SearchGif'

const ContainerGifList = () => {

    const [gifs, setGifs] = useState([])

    const fetchMyGifs = async (keyword = "") => {
        const result = await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=brad69BfHqZ1f23STRtucr3b2ybXBZyM`)

        const json = await result.json()

        setGifs(
            json.data.slice(0, 20).map(gif => gif.images.original.url)
        )
    }
    // usestate is passing an Array above 
    return (
        <div>
            <SearchGif fetchMyGifs={fetchMyGifs} />

            <ListofGif fetchedImage={gifs} />
        </div>
    )
}
export default ContainerGifList

// steps to replace class to functional component: 
// 1) add useState in the import React 
// 2) add const [getter, setter] = useState[state initial value]
// 3) replace setter with this.setState 
// 4) delete this. object, we can use the getter & setter straight away

// There are two different ways of making asynchronous requests in React: 1) promise 2) async await 
// 

// useState is a hook or a function that accepts two objects; 
// 1) an initial value of state or the getter and 
// 2) a method that updates the initial value = setter.  
// What we do after that is de-structuring the Array into separate 


// useEffect is a replacement for componentDidMount
// useEffect accepts a parameter which is a function that is triggered after every render of the component

