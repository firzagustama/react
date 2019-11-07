import React, {Component} from 'react';

class Tweet extends Component {
    state = {
        like: this.props.item.like
    };

    handleIncrement = (e) => {
      e.preventDefault();
      this.setState({like: this.state.like + 1});
    };

    handleDecrement = (e) => {
        e.preventDefault();
        if (this.state.like > 0)
            this.setState({like: this.state.like - 1});
    };

    render() {
        return (
            <div className={"tweet"}>
                <h4>{this.props.item.username}</h4>
                <p>"{this.props.item.tweet}"</p>
                <h5 id={"likes"} className={this.state.like >= 5 ? "red" : ""}>number of likes: {this.state.like}</h5>
                <div className={"btn-container"}>
                    <button className={"btn-increment"} onClick={this.handleIncrement}>increment</button>
                    <button className={"btn-decrement"} onClick={this.handleDecrement}>decrement</button>
                </div>
            </div>
        );
    }
}

export default Tweet;
