import React from "react"
import {Room} from "./Room"

export class RoomsList extends React.Component{
    render(){
        return(
            <div className="room-list">
                <Room></Room>
            </div>
        )
    }
}