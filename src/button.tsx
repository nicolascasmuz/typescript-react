import React from "react";

export class Button extends React.Component<any, any> {
    render() {
        return (
        <button style={{backgroundColor: "aqua", width: 200, height: 100, fontSize: 65}}>{this.props.children}</button>
        )
    }
}