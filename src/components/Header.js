import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggingOut } from '../store/actions/userActions';

class Header extends Component {
  render() {
    const { logout, user: { userMetadata } } = this.props;

    return (
      <div id="nav">
        <div className="container">
          <Link to="/" id="nav-logo">
            <img src="/images/takapic-logo/CL h small.png" alt="" />
          </Link>
          <div id="nav-menu">
            <i className="fa fa-bars" />
            <div>
              {userMetadata ? null : (
                <Link to="/photographer-registration/s1">
                  Become our photographer
                </Link>
              )}
              {userMetadata ? null : (
                <Link to="/traveller-sign-up">Traveller sign up</Link>
              )}
              <Link to="/how-it-works">How it works</Link>
              <Link to="/help">Help</Link>
              {userMetadata ? (
                <Link to="/user/1">[ {userMetadata.displayName} ]</Link>
              ) : (
                <Link to="/sign-in">Sign in</Link>
              )}
              {userMetadata ? (
                <a
                  onClick={evt => {
                    evt.preventDefault();
                    logout();
                  }}
                >
                  Sign out
                </a>
              ) : null}
            </div>
          </div>
          <div id="nav-search" className="search-toggle">
            <i className="fa fa-search" />
            <input type="text" placeholder="Anywhere, Anytime" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.userAuth,
  }),
  dispatch => ({
    logout: () => dispatch(loggingOut()),
  })
)(Header);
