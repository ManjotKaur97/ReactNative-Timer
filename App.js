/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  StyleSheet,

  View,
  Text,
} from 'react-native';
import Timer from './src/screens/Timer'
const App: () => React$Node = () => {
  return (
    <View style={{
      backgroundColor:'black',
      flex:1,
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center'
    }}>

      <Timer
        size={150}
        strokeWidth={15}
        duration = {50}
        color = {'grey'}
        strokeColor = {'#ffbf00'}
        fill = {"black"}
        fillOpacity={0.5}
        onTimerElapsed = {()=>{console.log('timer finished')}}
        onClickOption = {()=>{console.log('click option')}}
        noOfRotations ={1}
        firstText={true}
        firstTextColor={'white'}
        firstTextString={'BIG'}
        firstTextSize={25}
        firstX={58}
        firstY={70}
        secondText={false}
        secondTextColor={'white'}
        secondTextString={'BLIND'}
        secondTextSize={18}
        secondX={40}
        secondY={70}
        ></Timer>
    </View>
 );
};



export default App;
