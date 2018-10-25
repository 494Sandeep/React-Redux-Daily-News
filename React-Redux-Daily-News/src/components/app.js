import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// COMPONENTS
import Home from "../container/home";
import Header from './header';
import Footer from './footer';
import News from '../container/News'
import GalleryItem from '../container/GalleryItem'
const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/news/:id" component={News} />
                    <Route exact path="/galleries/:id" component={GalleryItem} />
                    <Route exact path="/" component={Home}></Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
export default App;