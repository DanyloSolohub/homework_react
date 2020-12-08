import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {
                    <ul>
                        User:{item.userId}-{item.title}
                    </ul>
                }
            </div>
        );
    }
}

export default PostComponent;