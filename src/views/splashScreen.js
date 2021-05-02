import React, {useEffect} from 'react';
import { ImageBackground } from 'react-native';
import {connect} from 'react-redux';
import { CommonImages } from '../constants/images';
import NativeSplashScreen from 'react-native-splash-screen';
const SplashScreen: () => React$Node = (props) => {
   useEffect(()=>{
       setTimeout(() => {
        NativeSplashScreen.hide();   
       }, 50000);
   })

  return <ImageBackground 
  style={{height:'100%',width:'100%'}}
   source={{uri: CommonImages.splash}}
    resizeMode="cover" />;
};

export default connect(null, {})(
  SplashScreen,
);
