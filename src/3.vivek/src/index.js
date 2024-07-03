import ReactDOM from "react-dom/client"; // react DOM
import React from "react";


// 
const root = ReactDOM.createRoot(document.getElementById("root"));

class Menu extends React.Component{
    render() {
        let menas=["home","about","contact"]
        return (
            <header>
                <ul>
                    <li> {menas[0]} </li>
                    <li> {menas[1]} </li>
                    <li> {menas[2]} </li>
                </ul>
            </header>
        )
    }
}

root.render(<Menu/>);
