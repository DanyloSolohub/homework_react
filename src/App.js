import React, {Component} from 'react';
import './App.css'
import AllPeople from "./ALL/AllPeople";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";





class App extends Component {
    render() {
        return (
            <Router>
            <div className={`main-block`}>
                 <div>
                   <Link to={""}><span className={`home-block`}>Home</span></Link>
               </div>
               <div>
                   <Link  to={"/people"}><span className={`people-block`}>People</span></Link>
               </div>
                </div>
                    <div className={`advecting-box`}>
                        <a  href="https://lpnu.ua/" target={`blank`}>Palitex-top</a>
                    </div>

                     <div className={`under-main`}>
                    <Switch>
                        <Route path={'/people'} render={()=>
                        <AllPeople/>}>
                        </Route>
                    </Switch>
                </div>

            </Router>
        );

    }
}

export default App;
