import React from 'react'

class ListofGif extends React.Component {
    
    render () {
       return (
            <div className="image-list">
                {this.props.fetchedImage.map(gif => <img src={gif} alt="gif image"/>)}
            </div>
        ) 
    }
} 
export default ListofGif