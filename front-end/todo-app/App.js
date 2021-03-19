/*
There are two kinds of components in react - Function and Class.
App.js is no longer created as Class Component. It is switched to Function Component.

Here use App.js as a Class Component.

*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

//import Counter from './Compoments/Counter/Counter' 
import TodoApp from './Compoments/Todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
      </div>
    );
  }
}


export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
