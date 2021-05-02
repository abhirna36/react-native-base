/* eslint-disable react/prop-types */

import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { headerType } from '../../../constants/Enum'
import styles from './styles'
import { CommonImages } from '../../../constants/images'
import TextTp from '../../../presentation/text/TextTp'
import TextTypes from '../../../presentation/text/TextTypes'

const CustomHeader = ({ goback, type, data, navigation, onPressProfile }) => {
  const renderHeaderType = () => {
    switch (type) {
      case headerType.DEFAULT:
        return <View style={styles.headerView}>
                    <TouchableOpacity style={styles.backtouchView}
                        onPress={goback}>
                        <Image style={styles.backIcon} source={CommonImages.backIcon}></Image>
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>{data.name}</Text>
                    <TouchableOpacity style={styles.profile}
                    >
                    </TouchableOpacity>
                </View>
      case headerType.DRAWER:
        return <View style={styles.headerView}>
                    <TouchableOpacity style={styles.backtouchView}
                        onPress={ async () => await navigation.openDrawer()}>
                        <Image style={styles.drawerIcon} source={CommonImages.drawer} />
                    </TouchableOpacity>
                    <TextTp style={styles.titleHeader} type={TextTypes.headingOneText} title={data?.name} />
                    <TouchableOpacity style={styles.profile}
                    onPress={onPressProfile}>
                    <Image style={styles.profileHeader} source={CommonImages.man_dummy} />
                    </TouchableOpacity>
                </View>
      case headerType.LOGIN:
        return <View></View>
      case headerType.TRANSPARENT_WITH_BACK:
        return <View></View>
    }
  }
  return <View style={styles.headerContainer}>
        {renderHeaderType()}
    </View>
}
export default CustomHeader
