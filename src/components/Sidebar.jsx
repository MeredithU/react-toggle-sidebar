/*
  Sidebar
  <Sidebar />
*/

import React from 'react';
import '../scss/styles.scss';

class Sidebar extends React.Component {
  render() {

    const container = (this.props.isNavBarOpen) ? 'open-sidebar-section' : 'closed-sidebar-section';

    const arrow = `arrow fa fa-angle-double-${ (this.props.isNavBarOpen) ? 'left' : 'right' }`;

    return (
      <div className={ container }>
        <div className='sidebar-header' onClick={ this.props.setNavBarState }>
          <h2>Sidebar</h2>
          <i className={ arrow }></i>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
};

Sidebar.propTypes = {
  isNavBarOpen: React.PropTypes.bool,
  setNavBarState: React.PropTypes.func
};

export default Sidebar;