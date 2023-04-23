import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';

class CheckboxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedIndex: -1,
      checkboxes: [
        {title: 'Checkbox 1', checked: false},
        {title: 'Checkbox 2', checked: false},
        {title: 'Checkbox 3', checked: false},
      ],
    };
  }

  onCheckboxPress(index) {
    const {checkboxes, checkedIndex} = this.state;
    if (checkedIndex === index) {
      checkboxes[index].checked = false;
      this.setState({checkedIndex: -1, checkboxes});
    } else {
      checkboxes.forEach((checkbox, i) => {
        if (i === index) {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      });
      this.setState({checkedIndex: index, checkboxes});
    }
  }

  render() {
    const {checkboxes} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select one option:</Text>
        <View style={styles.checkboxContainer}>
          {checkboxes.map((checkbox, index) => (
            <CheckBox
              key={index}
              title={checkbox.title}
              checked={checkbox.checked}
              onPress={() => this.onCheckboxPress(index)}
              containerStyle={styles.checkbox}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="#2ecc71"
              uncheckedColor="#bdc3c7"
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
});

export default CheckboxScreen;
