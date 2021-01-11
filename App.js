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
        size={150} // size of timer circle
        strokeWidth={15} // radius for stroke
        duration = {50} // duration in seconds
        color = {'grey'} // color of inner stroke
        strokeColor = {'#ffbf00'} // color for upper stroke
        fill = {"black"} // color inside circle
        fillOpacity={0.5} // change it to make transparent
        onTimerElapsed = {()=>{console.log('timer finished')}} // function called on timer elapsed
        noOfRotations ={1} // number of rotations to complete above mentioned time
        firstText={true} // Number of text lines apart from counter
        firstTextColor={'white'} // Text color
        firstTextString={'BIG'} // Text string
        firstTextSize={25} // Text size
        firstX={58} // x-axis for text
        firstY={70} // y-axis for text
        secondText={false} // second text
        secondTextColor={'white'} // second text color
        secondTextString={'SMALL'} // text string
        secondTextSize={18} //  text size
        secondX={40} //  x-axis for text
        secondY={70} //  y-axis for text
        ></Timer>
    </View>
 );
};



export default App;
