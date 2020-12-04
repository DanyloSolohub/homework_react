import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {useritem,first} = this.props
        return (
            <div>
                <div className={first} >{useritem.name}: {useritem.age},{useritem.address.city}</div>
            </div>
        );
    }
}

export default UserComponent;
// 1