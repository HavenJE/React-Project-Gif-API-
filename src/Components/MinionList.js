import React from 'react'

const MinionList = ({ minions, description, map }) => {
    return (
        
        <div className="minion-list">
            <h2> { description } </h2>
            { minions.map((minions)=>(
                <div className="gif-details">
                    <h3> {minions.number} </h3>
                    <p> {minions.likes} </p>
                    <p> { minions.description} </p>
                </div>
            ))}
        </div>
    )
}
export default MinionList