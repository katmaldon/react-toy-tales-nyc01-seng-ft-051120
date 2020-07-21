import React, { Component } from 'react';

class ToyForm extends Component {

  
  render() {

    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" onChange={this.props.handleChange} placeholder="Enter a toy's name..." value={this.props.newToy.name} className="input-text"/>
          <br/>
          <input type="text" name="image" onChange={this.props.handleChange} placeholder="Enter a toy's image URL..." value={this.props.newToy.image} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>

        </form>
      </div>
    );
  }

}

export default ToyForm;
