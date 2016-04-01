/*
  MainSection
  <MainSection />
*/

import React from 'react';
import '../scss/styles.scss';

class MainSection extends React.Component {
  render() {
    return (
      <div className='main-section'>
        <div className='tile-grid'>
          <h1>Main Section</h1>
          <div className='tile'>
            <h3>Tile One</h3>
            <p>Pie marshmallow wafer tiramisu jelly-o icing dragée. Brownie caramels macaroon cookie halvah. Candy canes jelly beans jelly-o jelly-o candy canes cheesecake cookie sesame snaps chupa chups.</p>
          </div>
          <div className='tile'>
            <h3>Tile Two</h3>
            <p>Apple pie fruitcake marzipan tiramisu jelly bonbon. Gummies chocolate bar caramels powder dragée cake liquorice gingerbread. Dragée liquorice jelly-o pudding toffee powder gummi bears sesame snaps.</p>
          </div>
          <div className='tile'>
            <h3>Tile Three</h3>
            <p>Icing jelly lemon drops. Candy jelly gingerbread pastry jelly beans dragée jelly. Lollipop sugar plum jelly-o. Sweet tootsie roll macaroon brownie toffee toffee marshmallow soufflé sesame snaps.</p>
          </div>
        </div>
      </div>
    )
  }
};

export default MainSection;