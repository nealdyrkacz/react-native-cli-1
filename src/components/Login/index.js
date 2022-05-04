import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';

const LoginComponent = () => {
  return (
    <Container>
      <Input
        label="Username"
        iconPosition="right"
        placeholder="Enter sername"
        //error={'This field is required'}
      />

      <Input
        label="Passwored"
        placeholder="Enter Password"
        icon={<Text>Show</Text>}
        iconPosition="right"
      />

      <CustomButton primarty title="Submit" />
    </Container>
  );
};

export default LoginComponent;
