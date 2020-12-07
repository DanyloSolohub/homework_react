import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item,onSelectpost} = this.props
        return (
            <div>
                    <ul>
                        {item.id}. {item.title} <br/>
                        <button onClick={()=> onSelectpost(item.id)} > chose me</button>  <hr/>
                    </ul>
            </div>
        );
    }
}

export default PostComponent;