import React, {Component} from 'react';
import './People.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
class PeopleComponent extends Component {
    render() {
        let {item,showPost} = this.props
        return (

            <div className={`app-route`}>
                {item.id}. {item.name}
           <div className={`btns`}>
               <Link to={`/people/${item.id}`}>
                <button className={`btn`}>INFO</button>
            </Link>
                <button onClick={() => showPost(item.id)} className={`btn1`}>POSTS</button>
           </div>
                <Switch>
                        <Route path={`/people/${item.id}`}>
                      <ul>
                          <li>  username: {item.username}</li>
                            <li>email: {item.email}</li>
                            <li>address: {item.address.city}</li>
                            <li>street: {item.address.street}</li>
                           <li> zipcode: {item.address.zipcode}</li>  </ul>
                        </Route>
                </Switch>

            </div>
        );
    }
}

export default withRouter(PeopleComponent);
