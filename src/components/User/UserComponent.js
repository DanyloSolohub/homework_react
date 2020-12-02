import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {useritem,cls} = this.props
        return (
            <div>
                <div className={cls} >{useritem.id}. {useritem.name} - {useritem.age} , {useritem.address.street} : {useritem.address.number}</div>
            </div>
        );
    }
}

export default UserComponent;