import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
