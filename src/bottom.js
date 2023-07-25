import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import messaging from './messaging';
import signout from './signout';
import Feather from 'react-native-vector-icons/Feather';
const Bottom = ({navigation}) => {
    const [ id, setId] = useState('')
  const Tab = createBottomTabNavigator();


  
  return (
    <>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown:false,
        
      }}>
        <Tab.Screen
          name="settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather name="settings" size={25} color={color}  />
            ),
            

          }}
          
        />
        <Tab.Screen
          name="messaging"
          component={messaging}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather name="send" size={25} color={color} />
            ),
            
        
          }}
          
        />
        <Tab.Screen
          name="signout"
          component={signout}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather
                name="log-out"
                size={25}
                color={color}
                // onPress={() => navigation.navigate('login')}
                // onLongPress={() => navigation.navigate('login')}
              />
            ),
           
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
