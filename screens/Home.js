import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View testID='homeScreen' style={styles.container}>
      <Text style={styles.text}>BAŞARILI DETOX TEST ÖRNEĞİMİZ</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
    backgroundColor:'black'
  },
  text:{
    fontSize:22,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  }
})