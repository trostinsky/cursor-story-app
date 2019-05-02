import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as serviceWorker from './serviceWorker';
const AppExample = (props) => {
    console.log(props);
    return (
        <div className="blue">
            <a href="#">Hello {props.name}!</a>
        </div>
    );
}

// TAGS === element
// Own TAGS === components

// ====
React.createElement("div", {
    className: "blue"
}, React.createElement("a", {
    href: "#"
}, "Hello")) //document.createElement, VirtualDOM

// <App className="pink" /> === App({ className: "pink" });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
