import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

export default App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {

    if (password.length < 8) {
      Alert.alert('La contraseña debe tener al menos 8 caracteres');
    }else{
      !expediente === null && !password === null 
      ? Alert.alert('Usuario no autenticado') 
      : Alert.alert('Usuario autenticado');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput} 
          placeholder="Expediente"
          maxLength={6}
          keyboardType="numeric"
          onChangeText={expediente => {
            setExpediente(expediente);
          }}
          value={expediente}
        />
        <TextInput 
          style={styles.TextInput}
          placeholder="Password"
          maxLength={10}
          secureTextEntry={true}
          onChangeText={password => {
            setPassword(password);
          }}
          value={password}
        />

      </View> 
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Iniciar sesión" 
          onPress={handleSubmit}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
    borderBlockColor: 'white',
    borderRadius: 5,
    margin: '10px',
    padding: '10px',
    color: 'white',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
  },
  TextInput: {
    color: 'black',
    backgroundColor: 'white',
  },
});