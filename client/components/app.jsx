import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import SearchBar from './searchbar';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <SearchBar />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
