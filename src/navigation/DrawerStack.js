/* eslint-disable react/prop-types */
import React from 'react'
import Home from '../views/screens/home/Home'
import { createDrawerNavigator } from '@react-navigation/drawer'

import ScreenNames from '../constants/Screens'
import DummyScreen from '../views/screens/profile/index'
import DrawerItem from '../views/component/drawerItem'
const Drawer = createDrawerNavigator()
const DrawerContent = (props) => {
  return <DrawerItem {...props}></DrawerItem>
}
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenNames.homeScreen}
     drawerContent={(props) => DrawerContent(props)}
      >
      <Drawer.Screen name={ScreenNames.homeScreen} component={Home} />
      <Drawer.Screen name="Notifications" component={DummyScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerStack
