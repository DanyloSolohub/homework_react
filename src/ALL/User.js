import React, {Component} from 'react';

class User extends Component {
UserFilter = (data,item) => {
        if (+data === item.id){
            return <div>
                {item.id}. {item.name}
            </div>
        }
    }
    render() {
        let {item,data} = this.props;
        return (
            <div>
                {
                    this.UserFilter(data,item)
                }
            </div>
        );
    }
}

export default User;