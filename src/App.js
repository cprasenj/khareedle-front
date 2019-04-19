import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  constructor(){
    super()
    this.state = {
      showData :[]
    }

  }

  componentDidMount(){

    Axios.get(`https://khareedle.herokuapp.com/`)
      .then(res => {
        this.setState({ showData : res.data.foo});
      })

  }

  render() {
    

    return (
      <div className="App">
        <header>
          <h1>Khareedle</h1>
        </header>
        <div>
          <span>{this.state.showData}</span>
        </div>
      </div>
    );
  }
}
export default App;
