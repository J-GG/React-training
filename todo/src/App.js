import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="todo"></div>
                <div className="button-discover button-discover--enabled">
                    <div className="button-discover--text button-discover--text-enabled">Click here to add a new list</div>
                    <div className="button">+</div>
                </div>
            </div>
        );
    }
}