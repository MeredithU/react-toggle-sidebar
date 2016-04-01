/*
  MainSection
  <MainSection />
*/

import React from 'react';
import '../scss/styles.scss';

class MainSection extends React.Component {
  render() {

    const container = (this.props.isNavBarOpen) ? 'open-main-section' : 'closed-main-section';

    return (
      <div className={ container }>
        <div className='tile-grid'>
          <h2>Main Section</h2>
          <div className='tile'>
            <h3>Tile One</h3>
            <p>Pie marshmallow wafer tiramisu jelly-o icing dragée. Brownie caramels macaroon cookie halvah. Candy canes jelly beans jelly-o jelly-o candy canes cheesecake cookie sesame snaps chupa chups.</p>
          </div>
          <div className='tile'>
            <h3>Tile Two</h3>
            <p>Apple pie fruitcake marzipan tiramisu jelly bonbon. Gummies chocolate bar caramels powder dragée cake liquorice gingerbread. Dragée liquorice jelly-o pudding toffee powder gummi bears.</p>
          </div>
          <div className='tile'>
            <h3>Tile Three</h3>
            <p>Icing jelly lemon drops. Candy jelly gingerbread pastry jelly beans dragée jelly. Lollipop sugar plum jelly-o. Sweet tootsie roll macaroon brownie toffee toffee marshmallow soufflé.</p>
          </div>
        </div>
      </div>
    )
  }
};

MainSection.propTypes = {
  isNavBarOpen: React.PropTypes.bool
};

export default MainSection;