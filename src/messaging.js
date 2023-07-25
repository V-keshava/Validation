import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Feather';
const Messaging = () => {
  return (
    <View style={styles.main}>
        <Fontisto name='send' size={20} />
      <TouchableOpacity>
      <Text>messaging</Text>
      </TouchableOpacity>
      {/* <hr/> */}
    </View>
  )
}

export default Messaging

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})