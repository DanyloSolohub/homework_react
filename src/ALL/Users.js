import React, {Component} from 'react';
import User from "./User";

class Users extends Component {
  state= {inputValue:``, users:[],flag:true,status:false}
    inputMain = React.createRef();



  onInputFill = () =>{

     if(this.inputMain.current.value < 1){
         //  this.setState({inputValue:`10`})
         this.inputMain.current.value = `10`
        }
        if(this.inputMain.current.value > 10){
           // this.setState({inputValue:`1`})
            this.inputMain.current.value = `1`
        }
        this.setState({flag:false})
    }

    onFormSubmit = (e) =>{
        e.preventDefault()

    }
    Send = () => {
    this.setState({status:true})
     this.setState({inputValue:this.inputMain.current.value})
    }

     componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`).then(value => value.json()).then(users => {this.setState({users})})
    }


    render() {
         let {inputValue,users,flag,status} = this.state;
        return (
            <div>
              <form onSubmit={this.onFormSubmit}>
                    <input ref={this.inputMain} type={'number'} onInput={this.onInputFill}   />
                    <button onClick={()=> {this.Send()}}  disabled={flag}>Send</button>
                </form>
                {
                   status && users.map(value => <User item={value} key={value.id} data={inputValue}/>)
                }

            </div>
        );
    }
}

export default Users;