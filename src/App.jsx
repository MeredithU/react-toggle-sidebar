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
  constructor(props) {
    super(props);

    this.state = {
      isNavBarOpen: true // status on whether navbar is open
    };

    this.setNavBarState = this.setNavBarState.bind(this);
  }

  setNavBarState(isNavBarOpen) {
    this.setState({
      isNavBarOpen: !this.state.isNavBarOpen
    });
  }

  render() {
    return (
      <div>
        <div className='top-container'>
          <h1 className='centered-title'>React Toggle Sidebar</h1>
          <h3 className='centered-title'>See how two sibling components communicate to each other</h3>
        </div>
        <div className='middle-container'>
          <div className='container'>
            <Sidebar isNavBarOpen={ this.state.isNavBarOpen } setNavBarState={ this.setNavBarState } />
            <MainSection isNavBarOpen={ this.state.isNavBarOpen } />
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));