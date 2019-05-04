// *.view.js
// *.controller.js
import React from "react";


// Author
// Text
// Image
// Like

export default class UsersList extends React.Component {
    // setState(state){
    //     // Facade
    //     this.state = {
    //         // Composer
    //         ...this.state,
    //         ...state
    //     }
    //     this.forceUpdate();
    // }

    // save to delete
    constructor(props) {
        super(props); // данные которые не меняются
        this.state = { // данные которые меняются
            likes: 0
        };
    }

    increaseLike = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        return (
            <div>
                <h4>Post</h4>
                <h5>Author: {this.props.author}</h5>
                {/*<img src={this.props.avatar} />*/}
                <div>{this.props.text}</div>
                <button onClick={this.increaseLike}>Like</button>
                <div>Likes: {this.state.likes}</div>
            </div>
        )
    }
}