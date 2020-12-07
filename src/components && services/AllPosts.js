import React, {Component} from 'react';
import PostComponent from "./PostComponent";
import {PostService} from "./PostService";


class AllPosts extends Component {

   PostService = new PostService()

    state = {posts:[],chosenOne:null}

    onSelectpost = (id) =>{
        this.PostService.getPostById(id).then(value => this.setState({chosenOne:value}))
    }


    render() {
        let {posts,chosenOne} = this.state
        return (
            <div>
                {
                    posts.map(value => <PostComponent item = {value} key = {value.id} onSelectpost={this.onSelectpost} />)
                }
                  {
            chosenOne && <h2>{chosenOne.id}.{chosenOne.title}</h2>
        }
            </div>

        );
    }
        componentDidMount() {
       this.PostService.getAllPosts().then(value => this.setState({posts:value}))
        }
}

export default AllPosts;