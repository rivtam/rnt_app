import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name, shift } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              Name: {name}{'\n'}
              Type: RAF
            </Text>
            <Text style={styles.titleStyle}>
              Consult Doctor{'\n'}
              Date: {shift}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const win = Dimensions.get('window');

const styles = {
  titleStyle: {
    fontSize: 15,
    paddingLeft: 15,
    width: win.width*0.47,
  }
};

export default ListItem;
