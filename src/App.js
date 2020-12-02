import React, {Component} from 'react';
import {usersWithAddress} from "./database/DB";
import {countries} from "./database/DB";
import {notebookes} from "./database/DB";
import UserComponent from "./components/User/UserComponent";
import CountriesComponent from "./components/countries/CountriesComponent";
import NotebookesComponent from "./components/notebookes/NotebookesComponent";
import './components/User/User.css'

class App extends Component {
    render() {

        return (
            <div>
               <div>
                {
                     usersWithAddress.map((user)=>{
                        let css = `first`
                        return <UserComponent useritem = {user} first = {css} key = {user.id} />
                    })
            }
            </div>
                <div>
                    {
                        countries.map((country,index)=>{
                            let css = `second`
                            return <CountriesComponent countryitem = {country} second = {css} key = {index} />
                        })
                    }
                </div>
                <div>
                    {
                        notebookes.map((notebook,index)=> {
                            let css = `third`
                            return <NotebookesComponent notebookitem={notebook} third = {css} key={index}/>
                        })
                    }
                </div>


            </div>
        );
    }
}

export default App;