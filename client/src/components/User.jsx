import React from "react"

export class User extends React.Component{
    render(){
        return(
            <div className="user">
                <div className="user__info">
                    <div className="user__name"></div>
                    <div className="user__status"></div>
                </div>
                <div className="user__new-msg-alert"></div>
            </div>
        )
    }
}