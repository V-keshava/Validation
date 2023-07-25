
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './src/Login'
import Home from './src/Home';
import Register from './src/Register';
import {NavigationContainer,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='home' component={Home} options={{headerShown:false}} />
        <Stack.Screen name='register' component={Register} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App