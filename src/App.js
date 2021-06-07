
import React from 'react'
import ContainerGifList from './Containers/ContainerGifList'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from 'react-bootstrap';

const App = () => {
    return (
        <div className="App">

            <div className="App-container">

                <h1 className="header">Wolecome to Gif API</h1>

            <Container fluid className="container-fluid">
                <ContainerGifList />
                    {/* <h2>Dear Users!</h2>
                    <p className="phrase">
                        This is a simple-styled React Project App created as a prerequisite for a Web Developer Course provided by Academy Xi.
                    </p>  */}
                </Container>
                    <div>
                        
                    </div>
            </div>

        </div>
    )
}
export default App