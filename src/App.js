import React, {Component} from 'react';
import Tweet from "./Tweet";

import "./App.css";

class App extends Component {
    state = {
        items: [{
            username: "@firzagustama",
            tweet: "Saya orang Sidoarjo",
            like: 0
            }, {
            username: "@pramestyjaya",
            tweet: "Saya orang Lombok",
            like: 0
            }, {
            username: "@pevitapearce",
            tweet: "Aku cinta firza",
            like: 0
            }]
    };
    render() {
        return (
            <div className={"container"}>
                {this.state.items.map(item => (
                    <Tweet item={item}/>
                ))}
            </div>
        );
    }
}

export default App;
