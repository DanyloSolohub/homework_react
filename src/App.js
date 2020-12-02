import React, {Component} from 'react';
import {usersWithAddress} from "./database/UsersDB";
import UserComponent from "./components/User/UserComponent";
import './components/User/User.css'


class App extends Component {
    render() {
        return (
            <div>
                {
                usersWithAddress.map((user,index) =>{
                   let cls = index%2? `pair`:`odd`

                    return (
                    <UserComponent
                    useritem = {user}
                    cls ={cls}
                    key={index} />);
                })
                }
            </div>
        );
    }
}

export default App;