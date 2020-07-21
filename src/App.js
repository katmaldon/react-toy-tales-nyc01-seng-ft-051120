import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

class App extends React.Component{

  state = {
    display: false,
    toyArray: [],
    newToy: {
      name: '',
      image: '',
      likes: 0
    }
  }

componentDidMount() {
  this.fetchToy()
}

  fetchToy = () => {
      fetch('http://localhost:3000/toys')
        .then(resp => resp.json())
        .then(newToy => {
          this.setState({ toyArray: newToy })
        })
  }


  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.newToy)
    })
      .then(res=>res.json())
      .then(newToy=>{
      this.setState({ toyArray: [...this.state.toyArray, newToy], 
        newToy: {
          name: '',
          image: '',
          likes: 0
        }
      })
    })

  }

  handleChange = e => {
    this.setState({
      newToy: { ...this.state.newToy, [e.target.name]: e.target.value }
    })
  }

  deleteHandler = id => {
    console.log(id);
    fetch(`http://localhost:3000/toys/${id}`,{
        method: "DELETE"
    })
    this.setState({ toyArray: [...this.state.toyArray.filter(toy=> toy.id !==id)] })
  } 


  handleLike = id => {
    fetch(`http://localhost:3000/toys/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ likes: this.state.toyArray.find(toy=>toy.id === id).likes + 1})
    })
    .then(res=>res.json())
    .then(updatedToy=>{
      this.setState({ toyArray: [...this.state.toyArray.map(toy=> { return toy.id===id ? updatedToy : toy
      })]})
    })
  }
  render(){
    // console.log(this.state);
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} newToy={this.state.newToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyArray={this.state.toyArray}deleteHandler={this.deleteHandler} handleLike={this.handleLike}/>
      </>
    );
  }

}

export default App;
