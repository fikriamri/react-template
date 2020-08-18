import React, { Component } from 'react';

/**
 * @file Footer is React Component that renders Footer for Layout Dashboard
 *
 * @module Footer
 * @extends Component
 */
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="layout-footer bg-light">
        <div className="layout-footer-body">
          <small className="version">Versi 1.0</small>
          <small className="copyright">
            2020 &copy;
            {' '}
            <a href="/" id="linkToHomePage">
              Alterra Course Dashboard
            </a>
          </small>
        </div>
      </div>
    );
  }
}

export default Footer;
