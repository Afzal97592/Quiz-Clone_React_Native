import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View style={styles.container} >
      <View>
        <Text>Result message</Text>
      </View>
      <View style={styles.bannerContainer}>
       <Image
        source={{uri:'https://bobcat.grahamdigital.com/image/upload/view?width=954&height=537&method=crop&url=https://sharedmedia.grahamdigital.com/photo/2016/04/06/Quiz_4840050_21609720_ver1.0.jpg'}}
          style={styles.banner}
          resizeMode="contain"
         />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
            <Text>Home</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}

export default Result

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,

    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center'
   },
   container:{
    padding: 40,
    paddingHorizontal:20,
    height:'100%'
   }
})