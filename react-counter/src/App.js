import React, { Component } from 'react';
import './App.css';
import './Counter.css'
import Counter from './Counter';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
            {<h1>Licznik w ReactJS</h1>}
        </header>
        <Counter initValue={Date.now()}/>
        <Counter initValue='31029312931023'/>
        <Counter />
      </div>
    );
  }
}

export default App;
