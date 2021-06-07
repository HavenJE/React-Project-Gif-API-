import React from 'react'

class ListofGif extends React.Component {
    
    render () {
       return (
            <div className="gifs-list" key="gifs-list">
                {this.props.fetchedImage.map(gif => <img src={gif} alt="gifs-images"/>)}
            </div>
        ) 
    }
} 
export default ListofGif