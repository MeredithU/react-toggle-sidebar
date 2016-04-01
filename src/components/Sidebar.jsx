/*
  Sidebar
  <Sidebar />
*/

import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>Sidebar</h3>
          <i className='fa fa-angle-double-right'></i>
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

export default Sidebar;