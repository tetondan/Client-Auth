import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function RequireAuth(ChildComponent){
  class RequireAuthentication extends Component {
    componentWillMount() {
      if(!this.props.authenticated){
        this.props.history.push('/signin');
      }
      // Here, we want to check to see if `this.props.authenticated` is true
      // If it isn't, then redirect the user back to the /signin page
    }

    render() {
      return (
        <div>
          {this.props.authenticated
            ? <ChildComponent />
            : null
          }
        </div>
      );
      // Here, check to see if `this.props.authenticated` is true
      // If it isn't, then we don't want this component to return anything
      // Else, render the component that was passed to this higher-order component
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
