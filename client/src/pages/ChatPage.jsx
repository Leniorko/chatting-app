import React from "react"
import {UsersList} from "../components/UsersList"
import {RoomsList} from "../components/RoomsList"
import {Chat} from "../components/Chat"

export class ChatPage extends React.Component{
    
    render(){
        return(
            <>
            <aside className="side-pannel">
                <UsersList></UsersList>
                <RoomsList></RoomsList>
            </aside>
            <Chat></Chat>
            </>
        )
    }
}