import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Title />
      <View style={styles.bannerContainer}>
         <Image source={{uri:'https://bobcat.grahamdigital.com/image/upload/view?width=954&height=537&method=crop&url=https://sharedmedia.grahamdigital.com/photo/2016/04/06/Quiz_4840050_21609720_ver1.0.jpg'}}
          style={styles.banner}
          resizeMode="contain"
         />
      </View>
      <TouchableOpacity style={styles.startbtn} onPress={()=> navigation.navigate('Quiz') } >
        <Text style={styles.startbtntxt}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,

    },

    bannerContainer:{
         justifyContent:'center',
         alignItems:'center',
         flex: 1,
    },
    container:{
         paddingTop: 40,
         paddingHorizontal: 20,
    },
    container:{
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%'
    },
    startbtn:{
      width:'100%',
      backgroundColor:'#1A759F',
      padding:16,
      borderRadius:16,
      alignItems:'center',
      marginBottom:30,
    },
    startbtntxt:{
      fontSize:24,
      fontWeight:'600',
      color:'white',

    }
})