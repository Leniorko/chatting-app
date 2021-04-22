import React from "react"


//Component used for log in 
export class UserLogin extends React.Component{
    render(){
        return(
            <div className="user-login">
                <input type="text" name="" id="" className="user-login__name-input"/>
                <button type="submit" className="user-login__name-submit">Login</button>
            </div>
        )
    }
}