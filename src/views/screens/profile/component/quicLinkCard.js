import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/styles'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { Common } from '../../../../constants/Common'
const QuickLinkCard = (props) => {
  return <View style={[styles.container, GlobalStyle.cardShadow]}>
        <View style={styles.quickView}>
          <TextTp type={TextTypes.bodyTwoText} title={Common.quickLink}/>
          <TouchableOpacity
          activeOpacity={0.5}>
            <Image style={styles.dropDownIcon} source={CommonImages.expand}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.rightIcons}>
        <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.icons} source={CommonImages.search}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.icons} source={CommonImages.home}/>
          </TouchableOpacity >
          <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.icons} source={CommonImages.notification}/>
          </TouchableOpacity>
        </View>

    </View>
}
export default QuickLinkCard
