import React, {Component} from 'react';
import PostComponent from "./PostComponent";

class AllPosts extends Component {
state = {posts:[], chosenOne : null}


    onSelectPost = (id) =>{
    let {posts} = this.state;
    let find = posts.find(value => value.id === id);
    this.setState({chosenOne:find})
    }


    render() {
    let{posts, chosenOne} = this.state
        return (
            <div>
                {
                    posts.map(value => <PostComponent item = {value} key = {value.id} onSelectPost = {this.onSelectPost}/>)
                }



                {
                    chosenOne &&  <h2>{chosenOne.id}. {chosenOne.title}</h2>
                }


            </div>
        );
    }
    componentDidMount() {
        this.posts = [];
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(posts => {
                this.setState({posts})
            })
    }
}


export default AllPosts;