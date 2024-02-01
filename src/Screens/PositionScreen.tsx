import React from 'react' 
import { StyleSheet, Text, View } from 'react-native' 
 
export const PositionScreen = () => { 
  return ( 
    <View style={styles.container}> 
        <View style={styles.boxPurple}></View> 
        <View style={styles.boxOrange}></View> 
        <View style={styles.boxGreen}></View> 
    </View> 
  ) 
} 
 
const styles=StyleSheet.create({ 
    container:{ 
        flex:1, 
      // width :300,
       //height :300,
        backgroundColor:'#40EAD8',
       // alignItems:'center',
       // justifyContent:'center',

  
    }, 
    boxPurple:{ 
        width:100, 
        height:100,  
        backgroundColor:'purple', 
        borderWidth:10, 
        borderColor:'white',
        position:'absolute', 
        top:10,
        right:0

        //left:50
        
    }, 
    boxOrange:{ 
      width:100, 
       height:100,  
        backgroundColor:'orange', 
        borderWidth:10, 
        borderColor:'white' ,
        position:'absolute',
        bottom:0,
        right:0
      //  top:50
    },
    boxGreen:{ 
        width:100, 
        height:100,  
         backgroundColor:'green', 
         borderWidth:10, 
         borderColor:'white' ,
         position:'absolute',
         bottom:0,
         left:0,
         top:0
     }    
})
