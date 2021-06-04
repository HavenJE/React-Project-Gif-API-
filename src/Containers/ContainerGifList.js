import React from 'react'
import ListofGif from '../Components/ListofGif'
import SearchGif from '../Components/SearchGif'

 const ContainerGifList = () => {

    state = {
        gifs: []
    }

    fetchMyGifs = async (keyword = "cats") => {
       const result = await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=brad69BfHqZ1f23STRtucr3b2ybXBZyM`)
         
       const json = await result.json()

       this.setState({
        gifs: json.data.slice(0,9).map(gif => gif.images.original.url )
       })
    }

        return (
            <div>
                <SearchGif fetchMyGifs={this.fetchMyGifs}/>
                <ListofGif fetchedImage = {this.state.gifs} />
            </div>
        )
}
export default ContainerGifList

// There are two different ways of making asynchronous requests in React: 1) promise 2) async await 
// 

// useState is a hook or a function that accepts 1) an initial value of state 2) a method that updates the initial value. 

// useEffect accepts a parameter which is a function that is triggered after every render of the component