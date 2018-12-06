import React, {Component} from 'react';
import './App.css';
import {Menu} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import FrontPage from './views/frontpage/index'
import Page2 from './views/page2/index'


class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <Menu inverted attached color={'orange'}>
                        <Menu.Item header attached inverted>StarterApp

                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/">
                                Front Page ish
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/page2">
                            Page 2
                            </Link>
                        </Menu.Item>

                    </Menu>


                    <Route path="/" exact component={FrontPage}/>
                    <Route path="/page2" component={Page2}/>

                </div>
            </Router>


        );
    }
}

export default App;
