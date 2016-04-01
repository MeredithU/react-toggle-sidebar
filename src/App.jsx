/*
  App
  <App />
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './components/Sidebar.jsx';
import MainSection from './components/MainSection.jsx';

import './scss/styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>React Toggle Sidebar</h1>
        <h3>See how two sibling components communicate to each other</h3>
        <Sidebar />
        <MainSection />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));