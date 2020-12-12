import React, {Component} from 'react';
import UsersService from "../Services/UsersService";
import PeopleComponent from "../Components/PeopleComponent";
import PostsService from "../Services/PostsService";
import PostsComp from "../Components/PostsComp";

class AllPeople extends Component {
    UService = new UsersService()
    PService = new PostsService()
    state = {users:[],posts:[],userPost:null,flag:false}
        showPost = (id) => this.setState({userPost:this.state.posts.filter(value => value.userId === id)})
    Backinfo = () => this.setState({flag:!this.state.flag})

   render() {
        let {users,userPost,flag} = this.state
        return (
            <div>
                {
                    users.map((value) => <PeopleComponent item = {value}  key = {value.id} showPost={this.showPost} Backinfo={this.Backinfo} flag={flag}/>)
                }
                {
                  userPost && userPost.map(value => <PostsComp item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
    componentDidMount() {
        this.UService.getAllUsers().then(users => this.setState({users}))
        this.PService.getAllPosts().then(posts => this.setState({posts}))

    }
}

export default AllPeople;