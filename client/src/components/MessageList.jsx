import React from "react"
import {Message} from "./Message"

export class MessageList extends React.Component{
    render(){
        return(
            <div className="message-list">
                <Message></Message>
            </div>
        )
    }
}