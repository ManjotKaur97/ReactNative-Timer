import React, {Component} from 'react';
import {Animated, View} from 'react-native';
import Svg, {Circle, Text, TSpan} from 'react-native-svg';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
var interval ;
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      timeValue: this.props.duration,
      visible:true,
    };
    this.width = this.props.size - 32;
    this.size = this.width;
    this.strokeWidth = this.props.strokeWidth;
    this.radius = (this.size - this.strokeWidth) / 2;
    this.circumference = this.radius * 2 * 3.14;
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: this.props.noOfRotations,
      duration: (this.props.duration * 1000)+1000,
      useNativeDriver: true,
      // easing: Easing.linear,
    }).start(
    
      () => {
        this.setState({
          visible:false,
        })
        if(this.state.timeValue === 0)
      this.props.onTimerElapsed();
      else
      this.props.onClickOption();
    });

    interval =   setInterval(() => {
        this.setState({
          timeValue: this.state.timeValue - 1,
        }),
        console.log('timevalue',this.state.timeValue);
        if(this.state.timeValue === 0)
        clearInterval(interval);
      }, 1000);
  
  
  }
componentWillUnmount(){
  console.log('new timer unmounted');
  clearInterval(interval);
}
  render() {
      // Animate inner and outer strokes
    const x = this.state.progress.interpolate({
      inputRange: [0, 1],
      // outputRange: [0, Math.PI * 2],
      outputRange: [ Math.PI * 2,0],
    });
    const strokeDashoffset = Animated.multiply(x, this.radius);
    const strokeWidth = this.strokeWidth;
    return this.state.visible ? (
  (
        <Svg height={this.size} width={this.size} style={{}}>
            {/* Outer Circle */}
          <Circle
            stroke={this.props.strokeColor}
            fill={this.props.fill}
            cx={this.size / 2}
            cy={this.size / 2}
            r={this.radius}
            fillOpacity={this.props.fillOpacity}
            {...{
              strokeWidth,
            }}
          />
            {/* Inner Circle */}
          <AnimatedCircle
            stroke={this.props.color}
            cx={this.size / 2}
            cy={this.size / 2}
            r={this.radius}
            fill={this.props.fill}
            fillOpacity={this.props.fillOpacity}
            strokeDasharray={`${this.circumference}, ${this.circumference}`}
            {...{strokeWidth, strokeDashoffset}}
          />
          {/* text */}
          <Text>
            {console.log('x', typeof (this.size / 2))}
            {this.props.firstText ? (
              <TSpan
                x={this.props.firstX}
                y={this.props.firstY}
                fill={this.props.firstTextColor}
                stroke={this.props.firstTextColor}
                fontSize={this.props.firstTextSize}
                textAnchor="middle">
                  {this.state.timeValue}
                {/* {this.props.firstTextString} */}
              </TSpan>
            ) : null}
          </Text>
        </Svg>
      ))
      :
     null
    
  
  }
}
