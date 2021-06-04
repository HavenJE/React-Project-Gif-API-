import React from "react"

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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="search">
                        Enter Your Favoured Gif keyword here:
                </label>
                    <input name="search" onClick={this.handleClick} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default SearchGif

// Albert note: the state is a read-only property = treated only as a getter, while the setState is the setter method. 

// to explain the event (e) object, you need to say that; the event object contains all the information about the event, one of them, is the element that triggers the event which is stored in the target property and that gives us an access to all other properties in that certain element (the input element in this case)

// the preventDefault is used to pervent the default behaviour that usually comes with submit event. 