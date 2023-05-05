import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {ViewPropTypes} from 'react-native';

const propTypes = {
  show: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default class ShowAleartBeutyfull extends React.Component {
  state = {
    show: false,
  };

  handleOpen = () => {
    this.setState({show: true});
  };

  handleClose = () => {
    this.setState({show: false});
  };
  static propTypes: {
    show: PropTypes.Requireable<boolean>;
    onRequestClose: PropTypes.Requireable<(...args: any[]) => any>;
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show" onPress={this.handleOpen} />
        <SCLAlert
          theme="success"
          show={this.state.show}
          title="Wellcome to Shoea"
          subtitle="Hãy đăng nhập hoặc đăng ký"
          onRequestClose={() => {}}
          useNativeDriver={true} //Thêm useNativeDriver vào đây
        >
          <SCLAlertButton theme="success" onPress={this.handleClose}>
            Done
          </SCLAlertButton>
        </SCLAlert>
      </View>
    );
  }
}

ShowAleartBeutyfull.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
