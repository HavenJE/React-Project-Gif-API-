import React from 'react'
import {v4} from 'uuid'

const MinionList = ({ minions, description, map }) => {
    return (
        
        <div key={v4()} className="minion-list">
            {/* <h2> { description } </h2> */}
            { minions.map((minions)=>(
                <div className="gif-details">
                    <ul key={v4()}>
                        <li key={v4()} className="minion-no"> Minion number: {minions.id} </li>
                        <li key={v4()}> Number of Likes: {minions.likes} </li>
                        <li key={v4()}> Minion description: { minions.description} </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default MinionList