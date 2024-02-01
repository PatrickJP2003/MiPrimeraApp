import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props{
    title: string;
    pistion?: 'bl'|'br';
    onPress:()=>void;
}

export const Fab =({title , pistion='bl',onPress}:Props)=> {
    console.log(title)
  return (
    <TouchableOpacity style={[styles.fabLoation, (pistion=='bl')?styles.left:styles.right]}
    onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.buttonText}>{title}</Text>
        </View>
        </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    fab:{
        backgroundColor: '#13664E' ,
        borderRadius:100,
        width:70,
        height:70,
        justifyContent:'center'
       
      },
      buttonText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
      },
      fabLoation:{
        position:'absolute', 
        bottom:10,
        
   }, 
   right:{right:10},
   left:{
left:10
   }

})
export default Fab;