import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

import Fontisto from 'react-native-vector-icons/Fontisto';
const Signout = ({navigation}) => {
  return (
    <View style={styles.main}>
        <Feather name='log-out' size={20} />
      <TouchableOpacity>
      <Text>signout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signout

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})