import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './MainStack'
import AuthStackNavigator from './AuthStack';

const MainNavigation = (props) => {
  const {token} = props;
  return (
    <NavigationContainer>
      {!token ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigation;