# ReactNative-Timer

Working React Native Timer is uploaded on master branch.

React libraries used
@react-native-svg
Install it from npm i react-native-svg
It is used to create circles and do animation on them.


Props
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
        
        
        ![Timer Image](https://github.com/ManjotKaur97/ReactNative-Timer/blob/master/assets/Timer.png)
