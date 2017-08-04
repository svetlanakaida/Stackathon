'use strict';

import React from 'react';
import {Animated, Image, View, VrButton, Text} from 'react-vr';



class Animation extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }


   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1}            // Configuration
     ).start();                // Don't forget start!
   }
   render() {
     return (
       <Animated.View          // Special animatable View
         style={{opacity: this.state.fadeAnim}}>
         {this.props.children}
       </Animated.View>
     );
   }
 }


module.exports = Animation;
