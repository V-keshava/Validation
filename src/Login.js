import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import React, {useEffect, useMemo, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';



const Login = ({navigation, route}) => {
  console.log(navigation, "log in navigation")
  const {name = '', code = ''} = route.params || {};
  const [username, setUsername] = name ? useState(name) : useState('');
  const [password, setPassword] = code ? useState(code) : useState('');
  const [passwordHide, setPasswordHide] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const handleLogin = () => {
    if (username == '' || password == '') {
      Alert.alert('Enter valid/required credentials');
    } else {
      setUsername('');
      setPassword('')
      Alert.alert('Login success');
      navigation.navigate('home');
    }
  };
  // useEffect(() => {
  //   data();
  // }, [username, password]);

  const protectPassword = () => {
    if (passwordHide == true) {
      setPasswordHide(false);
      setSecureTextEntry(false)
    } else {
      setPasswordHide(true);
      setSecureTextEntry(true);
    }
  };

  
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>User Login</Text>

      <View style={styles.direction}>
        <Feather name="user" size={25} style={styles.icons} />
        <TextInput
          placeholder="Enter Username"
          style={styles.inputs}
          keyboardType="email-address"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={styles.direction}>
        <Feather name="lock" size={25} style={styles.icons} />
        <TextInput
          placeholder="Enter Paswword"
          style={styles.inputs}
          secureTextEntry={secureTextEntry}
          onChangeText={setPassword}
          value={password}
        />
        {passwordHide == true ? (
          <Feather name="eye-off" size={25} onPress={protectPassword} style={styles.icon} />
        ) : (
          <Feather name="eye" size={25} onPress={protectPassword} style={styles.icon} />
        )}
      </View>
      <TouchableOpacity
        style={styles.btn_bg}
        onPress={handleLogin}
        // disabled={!username || !password}
        >
        <Text style={styles.btn}>LogIn</Text>
      </TouchableOpacity>
      <Text>
        Don't have an Account?{' '}
        <Text
          style={styles.create}
          onPress={() => {
            navigation.navigate('register');
          }}>
          Create One
        </Text>
      </Text>
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: '50%',
  },
  heading: {
    fontSize: 30,
    fontFamily: 'cursive',
    fontWeight: 'bold',
    paddingBottom: '5%',
  },
  inputs: {
    borderBottomWidth: 1,
    width: '60%',
    fontSize: 18,
    marginLeft: 10,
    textAlign:'center'
  },
  btn_bg: {
    // margin:100,
    backgroundColor: 'blue',
    height: '15%',
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  btn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  create: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
  },
  icons: {
    marginTop: 10,
    position:'relative',
    left:30
  },
  direction: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    position:'relative',
    left:-5,
    marginLeft:-20
  },
});
