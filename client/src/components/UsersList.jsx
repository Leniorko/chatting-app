import React from "react"
import {User} from "./User"

export class UsersList extends React.Component{
    render(){
        return(
            <div className="user-list">
                <User></User>
            </div>
        )
    }
}