/* eslint-disable no-useless-constructor */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerStack from './DrawerStack'
import ScreenNames from '../constants/Screens'

const MainStack = createStackNavigator()

class MainStackNavigator extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <MainStack.Navigator
        initialRouteName={ScreenNames.drawer}
        headerMode="none"
        >
        <MainStack.Screen name={ScreenNames.drawer} component={DrawerStack} />
      </MainStack.Navigator>
    )
  }
}

export default MainStackNavigator
