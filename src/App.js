import React, {Component} from 'react';
import './App.css'
import AllUsers from "./Components/AllUsers";
import AllPosts from "./Components/AllPosts";
import AllComments from "./Components/AllComments";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




class App extends Component {
    render() {
        return (
            <Router>
            <div>
               <div>
                   <Link to={"/users"}>users</Link>
               </div>
               <div>
                   <Link to={"/posts"}>posts</Link>
               </div>
                <div>
                   <Link to={"/comments"}>comments</Link>
               </div>

                <div className={`app-route`}>
                    <Switch>
                        <Route path={'/users'} render={()=>
                        <AllUsers/>}>

                        </Route>
                        <Route path={'/posts'} render={()=><AllPosts/>}>

                        </Route>
                        <Route path={'/comments'} render={()=><AllComments/>}>

                        </Route>
                    </Switch>
                </div>
            </div>
            </Router>
        );
    }
}

export default App;