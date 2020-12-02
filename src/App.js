import React, {Component} from 'react';
import {users} from "./database/UsersDB";

class App extends Component {
    render() {
        return (
            <div>
                {
                    users.map(user =>{
                    return(<div>{user.name} - {user.age} - {user.status.toString()} - {user.id}</div>)
                    })
                }
            </div>
        );
    }
}

export default App;