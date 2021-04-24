import React from "react";

export class Room extends React.Component {
  render() {
    return (
      <div className="room">
        <div className="room__description">
          <div className="room__name">{this.props.room}</div>
          <div className="room__user-cnt">2</div>
        </div>
        <div className="room__right-side">
          <div className="room__new-msg"></div>
          <button className="room__exit-btn">c</button>
        </div>
      </div>
    );
  }
}
