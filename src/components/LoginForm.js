import React, { Component } from 'react';
import { Text, Image, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { CardSection, Input, Button, Spinner, Card } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Image source={ require('../images/ignyt_logo.png' )}
            resizeMode={'contain'}
            style={styles.imageStyle}  
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

      </Card>
    );
  }
}

const win = Dimensions.get('window');

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: win.width * 0.25,
    height: 178,
    marginRight: win.width * 0.25

  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
