import React, {Component} from 'react';
import Service from "../Services/Service";
import CommentComponent from "./CommentComponent";

class AllComments extends Component {
    Service = new Service()
    state = {comments:[]}
    async componentDidMount() {
        await this.Service.getAllComments().then(value => this.setState({comments:value}))
    }

    render() {
        let {comments} = this.state
        return (
            <div>
                {
                    comments.map(value => <CommentComponent item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;