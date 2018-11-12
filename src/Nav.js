import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav flex-column pl-xl-5">
        <Link href="#test" to="/collection" className="nav-link active">Collection<span className="badge badge-pill badge-primary float-right">{Object.keys(this.props.collection).length ? Object.keys(this.props.collection).length : '0'}</span></Link>
        <Link href="#test" to="/wishlist" className="nav-link">Wishlist<span className="badge badge-pill badge-primary float-right">{Object.keys(this.props.wishlist).length ? Object.keys(this.props.wishlist).length : '0'}</span></Link>
        <Link href="#test" to="/loved" className="nav-link">Loved<span className="badge badge-pill badge-primary float-right">{Object.keys(this.props.loved).length ? Object.keys(this.props.loved).length : '0'}</span></Link>
      </nav>
    );
  }
}

export default Nav;
