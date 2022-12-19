import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Quiz from '../screens/quiz'


const Title = (route) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzler</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
   title:{
    fontSize:36,
    fontWeight:'600'
   },
   container:{
    paddingVertical:16,
    justifyContent:'center',
    alignItems:'center'
   }
})