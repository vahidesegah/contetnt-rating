
import React, { Component } from 'react';


class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0, 
        dislikes:0, 
        handleLike:() => {
        this.setState((prevState) => ({
            likes: prevState.likes +1
        }));
    },
handleDislike: () => {
    this.setState((prevState) => ({
        likes: prevState.dislikes +1
    }));
}
};
  }


  render() {
    return (
     <>
     <h1>Content Rating App</h1>
     <div className="content-rating">
        <p>Rate Me</p>
        <div className="rating-buttons">
<button className="like-button" onClick={this.state.handleLike}>
    Like ({this.state.likes})
</button>
<button className="dislike-button" onClick={this.state.handleDislike}>
    Dislike ({this.state.dislikes})
</button>
        </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
