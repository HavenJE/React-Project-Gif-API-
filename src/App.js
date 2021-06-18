
import React from 'react'
import FooterGifs from './Components/FooterGifs'
import ContainerGifList from './Containers/ContainerGifList'
import About from './Components/About'
import MinionList from './Components/MinionList'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap';

// import SearchGif from './Components/SearchGif'
// import ListofGif from './Components/ListofGif'
// import MockUpAPI from './Components/MockUpAPI'


const App = () => {
    return (
        <Router>
            <div className="App">

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"> Wolecome to Gif API </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/App"> Home </Nav.Link>
                            <Nav.Link as={Link} to="/About"> About Gif App </Nav.Link>
                            <Nav.Link as={Link} to="/MinionList"> Your Gif Details </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <div className="App-container">
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/MinionList" component={MinionList} />

                    </Switch>

                    {/* <div className="image1-div">
                        <img className="image-1" src="http://scion-social.com/blog/wp-content/uploads/2020/11/gif-wallpaper-13.gif" alt="electric-signal">
                        </img>

                    </div> */}
                    <div className="container-fluid" >
                        <ContainerGifList />
                    </div>
                    <div>
                        <FooterGifs />
                    </div>
                </div>

            </div>
        </Router>
    )
}
export default App