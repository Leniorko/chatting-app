import React from "react"
import {Link} from "react-router-dom"
import style from "../styles/UserLogin.css"


//Component used for log in 
export class UserLogin extends React.Component{

    constructor(props){
        super(props)
        this.state = {userName: ""}
    }

    onChangeHandle(event){
        this.setState({userName: event.target.value})
    }

    render(){
        return(
            <div className="user-login">
                <input type="text" className="user-login__name-input" placeholder="Enter user name"
                value={this.state.userName}
                onChange = {(e) => this.onChangeHandle(e)}/>
                <Link to="/rooms" className="user-login__name-submit">Login</Link>
            </div>
        )
    }
}