
import React, { useState } from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet,  } from 'react-native';
import Fab from '../Components/Fab';

export default function ContadorScreen() {
 const [contador, setContador]=useState(10);
  return (
   <View style={styles.container}>
    <Text style={styles.title}>
      Contador: {contador}
    </Text>
    <Fab title='+1'
    onPress={()=>setContador(contador+1)}
    />
     <Fab title='-1'
     pistion='br'
    onPress={()=>setContador(contador-1)}
    />
   
       
        {/* <TouchableOpacity style={styles.fabLoationBR}
    onPress={()=>setContador(contador+1)}>
      <View style={styles.fab}>
        <Text style={styles.buttonText}>-1</Text>
        </View>
        </TouchableOpacity> */}
       
    
   </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  title:{
    textAlign:'center',
      fontSize:30,
     // position: 'relative',
      top: -60
  }
      
})
