
import React from 'react'
import ContainerGifList from './Containers/ContainerGifList'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterGifs from './Components/FooterGifs'

// import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <div className="App">

            <div className="App-container">

                <h1 className="header">Wolecome to Gif API</h1>
                <div>
                    <h3>
                        This is a simply-styled React Project App created as a requirement for a Web Developer Course provided by Academy Xi
                    </h3>
                </div>
                <div className="image1-div">
                    <img class="image-1" src="http://scion-social.com/blog/wp-content/uploads/2020/11/gif-wallpaper-13.gif" alt="electric-signal">
                    </img>

                </div>
                <div className="container-fluid" >
                    <ContainerGifList />
                    
                </div>
               <div>
                   <FooterGifs />
               </div>
            </div>

        </div>
    )
}
export default App