import React, {useState} from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';
import Container from './src/components/Container';
import CustomButton from './src/components/CustomButton';

enum InputType {
  EMAIL = 'Email',
  PASSWORD = 'Password',
}

const App = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const updateValues = (value: any, type: string) => {
    switch (type) {
      case InputType.EMAIL: {
        setFormValues({...formValues, email: value});
        console.log(value);
        break;
      }
      case InputType.PASSWORD: {
        setFormValues({...formValues, password: value});
        console.log(value);
        break;
      }
    }
  };

  const handleLogin = () => {
    console.log('Logged In', formValues);
  };

  return (
    <Container containerStyles={{}}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formValues.email}
        onChangeText={value => updateValues(value, InputType.EMAIL)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formValues.password}
        onChangeText={value => updateValues(value, InputType.PASSWORD)}
      />
      <CustomButton title="LOGIN" onPress={handleLogin} />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    padding: 10,
    width: 300,
    borderWidth: 1,
    marginBottom: 10,
  },
  heading: {
    marginBottom: 10,
    letterSpacing: 5,
    fontSize: 25,
  },
});

export default App;
