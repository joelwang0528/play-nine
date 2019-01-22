import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

library.add(far);

const Stars = (props) => {
  return (
    <div className="col-5">
      <FontAwesomeIcon icon={["far", "star"]} />
      <FontAwesomeIcon icon={["far", "star"]} />
      <FontAwesomeIcon icon={["far", "star"]} />
      <FontAwesomeIcon icon={["far", "star"]} />
    </div>
  );
}

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      ...
    </div>
  );
}


class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
