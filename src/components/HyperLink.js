/*
* Ref. https://stackoverflow.com/questions/30540252/display-hyperlink-in-react-native-app
*/
import React, { Component, PropTypes } from 'react';
import {
  Linking,
  Text,
  StyleSheet
} from 'react-native';
import { blue, red } from '../utils/colors';

//   static propTypes = {
//     url: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }

export default class HyperLink extends Component {
  constructor(){
      super();
      this._goToURL = this._goToURL.bind(this);
  }
  render() {

    const { title, customStyle } = this.props;

    return(
      <Text style={[styles.title, customStyle]} onPress={this._goToURL}>
        {title}
      </Text>
    );
  }
  _goToURL() {
    const { url } = this.props;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }
}

const styles = StyleSheet.create({
  title: {
    color: red,
    fontWeight: 'bold'
  }
});