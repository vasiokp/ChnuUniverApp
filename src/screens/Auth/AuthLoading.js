import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';

import { connect } from 'react-redux'
import { checkAuth } from '../../store/actions'


class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    this.props.checkAuth().then(() => {
      this.props.navigation.navigate(this.props.profile.loggedIn ? 'App' : 'Auth');
    })
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(checkAuth())
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)

