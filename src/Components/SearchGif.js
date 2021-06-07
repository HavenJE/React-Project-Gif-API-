import React from "react"
import { Button } from 'react-bootstrap';

class SearchGif extends React.Component {

    state = {
        keyword: ""
    }

    handleClick = e => {
        this.setState({
            keyword: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchMyGifs(this.state.keyword)

        // (this.state.keyword) is an argument that is stored in the state 
    }

    handleClear = e => {
        // this.setState({
        //     keyword: ""
        // })
        this.props.fetchedImage = ""
    }

    render() {
        return (
            <div>
                <span className="search-box">
                    <form onSubmit={this.handleSubmit}>
                       <div> <label htmlFor="Search" className="Search-label"> 
                       Enter Your Favoured Gif Keyword Below: 
                       </label> </div> 

                         <div> <input name="Search" onClick={this.handleClick} className="input-keyword" placeholder="Gif Keyword"/> </div>   
                       <p htmlFor="submit"> <input type="submit" className="Submit-button"/> </p>
                       
                        {/* <div>
                            <label htmlFor="Clear">Clear Your Gif Search: </label>
                        </div>
                        <p htmlFor="clear"> 
                          <submit type="Submit" onClick={this.handleClear} > Clear </submit>  
                        </p> */}
                    </form>
                </span>
            </div>
        )
    }
}
export default SearchGif

// Albert note: the state is a read-only property = treated only as a getter, while the setState is the setter method. 

// to explain the event (e) object, you need to say that; the event object contains all the information about the event, one of them, is the element that triggers the event which is stored in the target property and that gives us an access to all other properties in that certain element (the input element in this case)

// the preventDefault is used to pervent the default behaviour that usually comes with submit event. 