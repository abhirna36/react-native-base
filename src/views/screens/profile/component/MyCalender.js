import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/calenderStyle'

import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { Common } from '../../../../constants/Common'
import { Color } from '../../../../style/Color'
import TextGroup from '../../../component/textGroup'
const MyCalender = (props) => {
  return <View style={[styles.container, GlobalStyle.cardShadow]}>
      <View style={styles.topHeader}>
      <View style={styles.flexRow}>
      <Image 
      style={styles.calendrIcon} 
      source={CommonImages.man}
      />
      <TextTp
       type={TextTypes.subTitleMedium16Text}
        title={'Thu, Jan 18'}/>
      </View>
      <View style={styles.today}>
      <TextTp 
      type={TextTypes.subTitleMedium16Text}
       style={{ fontSize: 14 }} 
       title={'Today'}/>

      </View>
      <View style={styles.leftView}>
          <TouchableOpacity>
          <Image
           style={styles.leftArrow} 
          source={CommonImages.expand}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
           style={styles.rightArrow}
            source={CommonImages.expand}/>
          </TouchableOpacity>
      </View>
      </View>
      <View style={styles.seperator}></View>
      <TextGroup title={'Internal communication - Hackathon 2020 Internal communication - Hackathon 2020...'}
      value={'10:14 - 11:14 am'}/>
         <TextGroup title={'Amith/Naushad'}
      value={'12:00 - 02:14 pm'}/>
         <TextGroup title={'Discussing scope of manager actions'}
      value={'10:14 - 11:14 am'}/>
       <TextTp
       type={TextTypes.subTitleMedium16Text}
        style={styles.seeCalender}
         title={'Go to My Calendar'}/>
    </View>
}
export default MyCalender
