import React from "react"

export class Room extends React.Component{
    render(){
        return(
            <div className="room">
                <div className="room__description">
                    <div className="room__name"></div>
                    <div className="room__user-cnt"></div>
                </div>
                <div className="room__new-msg"></div>
            </div>
        )
    }
}