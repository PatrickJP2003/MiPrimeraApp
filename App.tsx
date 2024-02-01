import React from 'react'
import HolaMundoScreen from './src/Screens/HolaMundoScreens';
import ContadorScreen from './src/Screens/ContadorScreen';
import BoxObjectModelScreen from './src/Screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import DimencionesScren from './src/Screens/DimencionesScren';
import { PositionScreen } from './src/Screens/PositionScreen';
import { FlexScreem } from './src/Screens/FlexScreem';






 const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    {/* <HolaMundoScreen/> */}
    {/* <ContadorScreen/> */}
    {/* <BoxObjectModelScreen/> */}
   {/* <DimencionesScren/> */}
   {/* <PositionScreen/> */}
   <FlexScreem/>
    </SafeAreaView>
  )
}
export default App;



