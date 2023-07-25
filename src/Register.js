import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import Feather from 'react-native-vector-icons/Feather';

import Fontisto from 'react-native-vector-icons/Fontisto';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordHide, setPasswordHide] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const emailRegex = /[a-z0-9]+@gmail.com/;
  const passwordRegex =
    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const handleregister = async () => {
    if (!emailRegex.test(email)) {
      Alert.alert('🤨  enter valid email!');
    } else if (username.length <= 6) {
      Alert.alert('😒  try another username');
    } else if (!passwordRegex.test(password)) {
      Alert.alert('😡 set proper password!');
    } else if (password != confirmPassword) {
      Alert.alert('🙆‍♂️ password and confirm password must be same');
    } else {
      try {
        Alert.alert('Registration Successfull  🙂')

        navigation.navigate('login',{username,password});
      } catch (err) {
        console.log(err);
      }
    }
  };
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
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.login}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              navigation.navigate('login');
            }}>
            <Text style={styles.btn}>SignIn</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.heading}>Register here</Text>
          <View style={styles.direction}>
            <Fontisto name="email" size={25} style={styles.icons} />
            <TextInput
              placeholder="Enter Email"
              keyboardType="email-address"
              style={styles.inputs}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.direction}>
            <Feather name="user" size={25} style={styles.icons} />
            <TextInput
              placeholder="set username"
              keyboardType="default"
              style={styles.inputs}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.direction}>
            <Feather name="lock" size={25} style={styles.icons} />
            <TextInput
              placeholder="set password"
              keyboardType="default"
              style={styles.inputs}
              secureTextEntry={secureTextEntry}
              onChangeText={setPassword}
            />
             {passwordHide == true ? (
          <Feather name="eye-off" size={25} onPress={protectPassword} style={styles.icon} />
        ) : (
          <Feather name="eye" size={25} onPress={protectPassword} style={styles.icon}/>
        )}
          </View>
          <View style={styles.direction}>
            <Feather name="lock" size={25} style={styles.icons} />
            <TextInput
              placeholder="confirm password"
              keyboardType="default"
              style={styles.inputs}
              secureTextEntry={secureTextEntry}
              onChangeText={setConfirmPassword}
            />
             {passwordHide == true ? (
          <Feather name="eye-off" size={25} onPress={protectPassword} style={styles.icon} />
        ) : (
          <Feather name="eye" size={25} onPress={protectPassword} style={styles.icon}/>
        )}
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btn_bg}
            // onPress={() => navigation.navigate('login')}
            onPress={handleregister}
            disabled={!email || !password || !username || !confirmPassword}>
            <Text style={styles.btn}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
  },
  content: {
    marginTop: '40%',
    alignItems: 'center',
  },
  login: {
    display: 'flex',
    marginTop: '10%',
    marginRight: '5%',
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: 30,
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
  icons: {
    marginTop: 20,
    marginRight:-25,
  
    
  },
  icon:{
    position:'relative',
    left:-5,
    marginLeft:-20
  },
  inputs: {
    borderBottomWidth: 1,
    width: 250,
    marginTop: 15,
    marginLeft: 0,
    fontSize: 18,
    textAlign:'center'
  },
  btn_bg: {
    // margin:100,
    backgroundColor: 'blue',
    height: 40,
    width: 250,
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
  signIn: {
    backgroundColor: 'blue',
    height: 40,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  direction: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
