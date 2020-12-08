import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {item,showPost} = this.props
        return (
            <div>
                {
                    <ul>{item.id}. {item.name} <br/>
                        <button onClick={() => showPost(item.id)}>tap me</button>
                    </ul>
                }
            </div>
        );
    }
}

export default UserComponent;