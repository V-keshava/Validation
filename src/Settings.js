import { StyleSheet, Text, View, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
const Settings = () => {
  return (
    <View style={styles.main}>
        <Feather name='settings' size={20} />
      <TouchableOpacity>
      <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})