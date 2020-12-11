import React, {Component} from 'react';
import './Posts.css'
class PostsComp extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className={`posts-box-total`}>
            <div className={`posts-box`}>
               <ul> {item.id}) {item.title}
            </ul></div></div>
        );
    }
}

export default PostsComp;