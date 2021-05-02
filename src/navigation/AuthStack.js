/* eslint-disable no-useless-constructor */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerStack from './DrawerStack'
import ScreenNames from '../constants/Screens'
import LoginScreen from '../views/screens/login'

const AuthStack = createStackNavigator()

class AuthStackNavigator extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <AuthStack.Navigator
        initialRouteName={ScreenNames.login}
        headerMode="none"
        >
        <AuthStack.Screen name={ScreenNames.login} component={LoginScreen} />
      </AuthStack.Navigator>
    )
  }
}

export default AuthStackNavigator
