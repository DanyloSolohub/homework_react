import React, {Component} from 'react';
import {AllService} from "../services/AllService";
import UserComponent from "./UserComponent";
import PostComponent from "./PostComponent";

class All extends Component {
     AllService = new AllService()
    state = {users:[],posts:[],userPost:null}


 showPost = (id) => this.setState({userPost:this.state.posts.filter(value => value.userId === id)})


    render() {
         let {users,userPost} = this.state
        return (
            <div>
                {
                    users.map(value => <UserComponent item = {value} key = {value.id} showPost = {this.showPost} />)
                }
                {
                   userPost && userPost.map(value => <PostComponent item = {value} key = {value.id}/>)
                }


            </div>
        );
    }
    componentDidMount() {
       this.AllService.getAllUsers().then(value => this.setState({users:value}))
       this.AllService.getAllPosts().then(value => this.setState({posts:value}))
        }
}

export default All;