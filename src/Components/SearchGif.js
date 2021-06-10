import {useState} from "react"

// import {  } from 'react-bootstrap';

const SearchGif = ({fetchMyGifs}) => {
// in the above code, we are de-structuring the object ({fetchMyGifs})
    const [keyword, setKeyword] = useState([]) 
    // in the above code, we are de-structuring an Array using the useState method 
    // We could also pass a specific keyword e.g. "dogs" or "minions", but will keep it an empty string

    const [clear, setClear] = useState(null)
    // state = {
    //     keyword: ""
    // }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetchMyGifs(keyword)

        // (this.state.keyword) is an argument that is stored in the state 
    }

    // const handleClear = e => {
    //     const clearChildren = () => {
    //         e.target.setClear.value = ''
    //     }
    //    clearChildren()  
    // }

        return (
            <div>
                <span className="search-box" >
                    <form onSubmit={handleSubmit} key={clear}>
                       <div> <label htmlFor="Search" className="Search-label"> 
                       Enter Your Favoured Gif Keyword Below: 
                       </label> </div> 

                         <div> <input name="Search" onClick={handleChange} className="input-keyword" placeholder="Gif Keyword"/> 
                         </div>   
                       <p htmlFor="submit"> <input type="submit" className="Submit-button"/> </p>
                       
                        {/* <div>
                            <label htmlFor="Clear">Clear Your Gif Search: </label>
                        </div>
                        <p htmlFor="clear"> 
                          <button type="reset" onClick={handleClear} key={setClear}> Clear </button>  
                        </p> */}
                    </form>
                </span>
            </div>
        )
    
}
export default SearchGif

// Albert note: the state is a read-only property = treated only as a getter, while the setState is the setter method. 

// to explain the event (e) object, you need to say that; the event object contains all the information about the event, one of them, is the element that triggers the event which is stored in the target property and that gives us an access to all other properties in that certain element (the input element in this case)

// the preventDefault is used to pervent the default behaviour that usually comes with submit event. 