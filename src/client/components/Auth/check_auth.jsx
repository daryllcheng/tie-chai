import React from 'react';
import { connect } from 'react-redux';

export default function (ComponentNeedCheck) {
  const Authentication = React.createClass({
    contextTypes: {
      router: React.PropTypes.func.isRequired
    },
    componentWillMount() {
      console.log('componentWillMount +++++++++++');
      if (!this.props.authenticated) {
        console.log('user not sign in-------------, the context ', this.props.authenticated);
        this.context.router.push('/');
      }
    },
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    },
    render() {
      return <ComponentNeedCheck {...this.props} />
    }
  })

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}