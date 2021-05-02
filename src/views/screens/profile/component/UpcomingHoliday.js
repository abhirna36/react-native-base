import React from 'react'
import { Image, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/calenderStyle'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import TextGroup from '../../../component/textGroup'
import { Common } from '../../../../constants/Common'
const UpcomingHolidays = () => {
  return <View style={[styles.container, GlobalStyle.cardShadow]}>
      <View style={styles.flexRow1}>
      <Image
      style={styles.calendrIcon}
      source={CommonImages.notification}
      />
      <TextTp
       type={TextTypes.subTitleMedium16Text}
        title={Common.upcomingHoliday}/>
      </View>
      <View style={styles.seperator}></View>
      <View style={styles.group}>
      <TextGroup title={'Republic day'}
      value={'Tue, 26 Jan 2021'}/>
       <TextTp
      type={TextTypes.subTitleOneText}
      style={styles.holiday}
       title={'Optional  Holiday'}/>
      </View>
      <View style={styles.group}>
      <TextGroup title={'Madhawanavami'}
      value={'Sun, 21 Feb 2021'}/>
       <TextTp
      type={TextTypes.subTitleOneText}
       style={styles.holiday}
       title={'Holiday'}/>
      </View>
      <TextTp
       type={TextTypes.subTitleMedium16Text}
        style={[styles.seeCalender, { marginTop: 16 }]}
         title={Common.seeAllHoliday}/>
    </View>
}
export default UpcomingHolidays
