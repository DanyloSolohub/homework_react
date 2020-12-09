import React, {Component} from 'react';
import PostComponent from "../Components/PostComponent";
import Service from "../Services/Service";
class AllPosts extends Component {
    Service = new Service()
    state = {posts:[]}
     async componentDidMount() {
        await this.Service.getAllPosts().then(value => this.setState({posts:value}))
    }

    render() {
        let {posts} = this.state
        return (
            <div>
                {
                    posts.map(value => <PostComponent item = {value} key = {value.id} />)
                }
            </div>
        );
    }
}

export default AllPosts;