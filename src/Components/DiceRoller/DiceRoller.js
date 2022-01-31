import React from "react";

class DiceRoller extends React.Component {
    render() {
        return (
            <button className="RollButton"
            onClick={this.props.onClick}>
                Roll
            </button>
        );
    }
}

export default DiceRoller;