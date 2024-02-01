import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const  FlexScreem=()=> {
  return (
  <View style={styles.conatiner}>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
<Text style={styles.box1}>Caja 1 </Text>
<Text style={styles.box2}>Caja 2 </Text>
<Text style={styles.box3}>Caja 3 </Text>
  </View>
  )
}
const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#720455',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    flexWrap:'wrap'
    },
    box1:{
     //  flex:3,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',
      // alignSelf:'center'
    },
    box2:{
       // flex:2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',
      //  alignSelf:'flex-start'
    },
    box3:{
       // flex:1,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        color:'white',
      //  alignSelf:'flex-end'
    }

})
