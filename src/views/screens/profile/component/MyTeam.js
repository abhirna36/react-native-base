/* eslint-disable react/jsx-key */
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/styles'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { Common } from '../../../../constants/Common'
import { Color } from '../../../../style/Color'
const arr = [{}, {}, {}, {}, {}]
const MyTeam = (props) => {
  return <View style={[styles.myTeamContainer, GlobalStyle.cardShadow]}>
      <TextTp style={styles.teamTitle}
      type={TextTypes.headingOneText}
       title={Common.myTeam}/>
        <View style={styles.profileList}>
         {arr.map((item, index) => {
           return <View
           style={[styles.plist,
             { backgroundColor: index === 4 ? Color.extraLigthHover : null }]}>
           {index === 4
             ? <TextTp
             style={{ color: Color.secondaryHover }}
              type={TextTypes.subTitleOneText}
               title={'+5'}/>
             : <Image
             style={styles.newImagelist}
              source={CommonImages.man_dummy}
               resizeMode='cover'/>}
             </View>
         })}
        </View>
        <TextTp style={styles.seeteam}
         type={TextTypes.headingOneText}
          title={Common.seeAllTeam}/>
         <View style={styles.teamDesc}>
         <Image
             style={styles.teamCeleb}
              source={CommonImages.man_dummy}
               resizeMode='cover'/>
               <TextTp style={styles.textCelb}
                numberOfLines={2}
                type={TextTypes.subTitleOneText}
                 title={Common.teamMemberCelebrate}>
                <TextTp style={{ color: Color.primary }}
                type={TextTypes.subTitleOneText}
                 title={Common.seeWhoCeleb}>
                 </TextTp>
                 </TextTp>
         </View>
         <View style={styles.teamDesc}>
         <Image
             style={styles.teamCeleb}
              source={CommonImages.man_dummy}
               resizeMode='cover'/>
               <TextTp style={styles.textCelb}
                numberOfLines={2}
                type={TextTypes.subTitleOneText}
                 title={Common.takeTimeOff}>
                <TextTp style={{ color: Color.primary }}
                type={TextTypes.subTitleOneText}
                 title={Common.viewTimeOff}>
                 </TextTp>
                 </TextTp>
         </View>
    </View>
}
export default MyTeam
