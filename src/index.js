import React from "react";
import ReactDOM from "react-dom";
import HookExample from "./components/HookExample";
import "./index.css";
import Searchbar from "./components/Searchbar";

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function Comment(props) {
    const { author } = props;
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={author} />
                <div className="UserInfo-name">{props.author.name}</div>
            </div>
            <div className="Comment-text">{props.text}</div>
        </div>
    );
}

function tick(props) {
    const X = <Searchbar name="Sarah" />;
    const author = {
        name: "sarah",
        avatarUrl:
            "https://discussingfilm.net/wp-content/uploads/2022/09/Avatar-Neytiri-Eywa-Seed-James-Cameron.jpg",
    };
    const element = (
        <div>
            {X}
            <Comment text="this is comment" author={author} />
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <HookExample />
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
}

// setInterval(tick, 1000);
tick();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
