import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MinionList from './MinionList'   

const MockUpAPI = () => {

    const [minions, setMinions] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/minions')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setMinions(data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    return (
        <div className="jsonServer">
            { <MinionList minions={minions} />}
        </div>
    )
}

export default MockUpAPI

// Resources
//   http://localhost:8000/minions
//   http://localhost:8000/tom&Jerry



// const minionGiform = document.getElementById('minionGiform');
//     minionGiform.addEventListener('submit', fetchNewMinion()); 

//     const fetchNewMinion = () => {
//         const gifID = document.querySelector('.gifDisplay'); 

//         const newMinionGif = {
//             id: id.value,
//             likes: likes.value,
//             description: description.value
//         }

//         const confObj = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify(newMinionGif)
//         }

// fetch('http://localhost:8000/minions', confObj)
// return (
//     <div className="jsonServer">
//         <MinionList minions={minions} />
//     </div>
// )  

// useEffect note: the useEffect takes a callback function and a dependency. 
// the dependencies work in two ways:  
// 1. if you provide an empty dependency Array [ ], it means that I'm going to be run in the initial render only (we fetch the data once when the componenet is rendered)
// 2. if you don't provide it, that means it will be rendered everytime 
// 3. if you have a particular Array [Array] is changed, it will be rendered only when that Array is there 

// fetch method accepts two parameters; URL and configObct, that will get us a promise. The 
// .then(res => {is just a response object 
// return res.json() => this is parses the data into a json for us 

// {minions && <MinionList minions={minions} />} here, we using the logical AND in Js which is a conditional templating in React. 
// The logical AND evaluate the left side first, and if its false => it does not bother what's on the right. 
// If the left is true, it will output the right. 