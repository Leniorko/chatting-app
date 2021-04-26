import React from "react"


// Layout for user
export class User extends React.Component{
    render(){
        return(
            <div className="user">
                <div className="user__info">
                    <div className="user__name">{this.props.user}</div>
                    <div className="user__status"></div>
                </div>
            </div>
        )
    }
}