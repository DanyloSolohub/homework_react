import React, {Component} from 'react';
import Service from "../Services/Service";
import UserComponent from "./UserComponent";

class AllUsers extends Component {
    Service = new Service()
    state = {users:[]}
    async componentDidMount() {
        await  this.Service.getAllUsers().then(value => this.setState({users:value}))
    }

    render() {
        let {users} = this.state
        return (
            <div>
                {
                    users.map(value => <UserComponent item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsers;