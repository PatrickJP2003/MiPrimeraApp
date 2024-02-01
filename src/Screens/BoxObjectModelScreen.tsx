import React from 'react'
import { StyleSheet, View, Text,  } from 'react-native';

export const BoxObjectModelScreen=()=> {
  return (
  <View style={styles.container}>
    <Text style = {styles.title}> Box OBject Model
    </Text>
  </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },

title:{
    paddingVertical:30,
    paddingHorizontal:100,
    marginHorizontal:20,
    fontSize:20,
    margin:50,
    borderWidth :10

}
    

})
export default BoxObjectModelScreen;
