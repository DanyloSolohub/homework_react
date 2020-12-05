import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item, onSelectPost} = this.props
        return (
            <div>
                <ul>{item.id}. {item.title} <br/> <h5>{item.body} </h5>
                <button onClick={() => onSelectPost(item.id)}>Choose me</button> <hr/> </ul>
            </div>
        );
    }
}

export default PostComponent;