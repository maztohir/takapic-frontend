import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/Page';
import { compose, lifecycle } from 'recompose';

class PhotographerRegistrationStepFinish extends Component {
  render() {
    return (
      <Page>
        <div className="container-fluid" id="photographer-landing-finish">
          <div className="row">
            <div id="success-page">
              <div className="wrapper">
                <div className="inner-wrapper text-center">
                  <div className="text-wrapper">
                    <h2>You're all set!</h2>
                    <p>You can now start your work on Takapic</p>
                    <button
                      className="btn btn-primary center-block"
                      type="button"
                    >
                      Start Exploring
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default PhotographerRegistrationStepFinish;