import React from 'react'
import { Dimensions, StyleSheet, View, useWindowDimensions , } from 'react-native';
//const {width , height}  =Dimensions.get('window');
 const  DimencionesScren = ()=> {
    const {width , height}  = useWindowDimensions();
  return (
    <View style={styles.container}>
   <View>  <View style={styles.boxOrangine}>  </View>
           <View style={{...styles.boxPurple, width:width*0.50}}>  </View>
           
 </View>
 <text style={styles.title}>w:{width} - H:{height}</text>
 </View>
  )
}
const styles= StyleSheet.create({
    container:{
width:100,
height:200,
backgroundColor:'red' 
    },
    boxPurple:{
            backgroundColor:'purple',
                width:50,
                height:50
    },
    boxOrangine:{
            backgroundColor:'orangine',
            
    },
    title:{fontSize:25}

});
export default DimencionesScren;
