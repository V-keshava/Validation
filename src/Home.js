import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './Account';

import Bottom from './bottom';
import Feather from 'react-native-vector-icons/Feather';
import {RollInRight} from 'react-native-reanimated';
const Home = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Drawer.Navigator
        initialRouteName="profile"
        screenOptions={{drawerPosition: 'left',}}>
        <Drawer.Screen
          name="account"
          component={Account}
          options={{
            drawerIcon: ({size}) => <Feather name="user" size={25} />,
            drawerLabelStyle: {fontSize: 18, color: 'blue', fontWeight: '300'},
            drawerItemStyle:{marginLeft:15}
          }}
        />
        <Drawer.Screen
          name="profile"
          component={Bottom}
          options={{drawerIcon: ({size}) => <Feather name="user" size={25} />,
          drawerLabelStyle: {fontSize: 18, color: 'blue', fontWeight: '300'},
          drawerItemStyle:{marginLeft:15}}}
        />
      </Drawer.Navigator>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  signout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_bg: {
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  btn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
