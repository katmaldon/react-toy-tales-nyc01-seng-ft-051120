import React, { Component } from 'react';

class ToyCard extends Component {
// state = {
//   likes: this.props.likes
// }


  render() {
    // console.log(this.state);
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button onClick={() => this.props.handleLike(this.props.id)} className="like-btn">Like {'<3'}</button>
        <button onClick={()=>this.props.deleteHandler(this.props.id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
