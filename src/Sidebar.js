import React from 'react';
import Nav from './Nav';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-xl-2 bg-light">
        <div className="sidebar  h-100 py-5">
          <Nav
            collection={this.props.collection}
            wishlist={this.props.wishlist}
            loved={this.props.loved}/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
