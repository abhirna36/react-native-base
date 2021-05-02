/* eslint-disable react/prop-types */
import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import CustomHeader from '../header/index'
import { getHeaderConfig } from '../../../utility'
import { hasNotch } from 'react-native-device-info'
const TapplentBaseView = (props) => {
  const { scrollEnabled, onPressProfile } = props
  const headerConfig = getHeaderConfig(props, props?.callback)
  if (props?.headerData) {
    headerConfig.data = props?.headerData
  } else if (onPressProfile) {
    headerConfig.onPressProfile = onPressProfile
  }
  return (
        <View style={styles.container}>
            <CustomHeader {...headerConfig} />
            {scrollEnabled
              ? <ScrollView
                contentContainerStyle={styles.container}>
                {props.children}
            </ScrollView>
              : <View
                    style={styles.container}
                >{props.children}
                </View>}
            {hasNotch() ? <View style={styles.bottomSafeView}></View> : null}
        </View>)
}
export default TapplentBaseView
