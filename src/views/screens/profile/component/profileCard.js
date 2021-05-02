import React from 'react'
import { Image, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/styles'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { Common } from '../../../../constants/Common'
import { Color } from '../../../../style/Color'
const ProfileCard = () => {
  return <View>
  <View style={[styles.profileContainer, GlobalStyle.cardShadow]}>
      <Image style={styles.coverImage} source={CommonImages.dummy}></Image>
        <View style={styles.profileView}>
        <Image
        style={styles.imageStyle}
         source={CommonImages.man_dummy}
          resizeMode='cover'/>
        </View>
        <TextTp
        title={'Welcome, John Doe '}
        style={{ marginTop: 16 }}
        type={TextTypes.headingTwoText}/>
        <TextTp
        title={'Manager, HRIT'}
        style={{ marginTop: 4, color: Color.secondary }}
        type={TextTypes.bodyTwoText}/>
        <View style={styles.likeView}>
           <View style={styles.ViewsView}>
               <View style={styles.label}>
               <TextTp
        title={'3 new'}
        style={styles.viewText}
        type={TextTypes.bodyOneText}/>
               </View>
           <Image
        style={styles.viewIcon}
         source={CommonImages.view}
          resizeMode='cover'/>
          <View style={styles.textView}>
          <TextTp
        title={'20'}
        style={{ color: Color.secondary, fontSize: 20 }}
        type={TextTypes.headingOneText}/>
          <TextTp
        title={Common.views}
        style={styles.numberText}
        type={TextTypes.bodyOneText}/>
          </View>
 </View>
<View style={styles.seperator}></View>
<View style={styles.ViewsView}>
           <Image
        style={styles.viewIcon}
         source={CommonImages.like}
          resizeMode='cover'/>
          <View style={{ alignSelf: 'center', marginLeft: 8 }}>
          <TextTp
        title={'10'}
        style={{ color: Color.secondary, fontSize: 20 }}
        type={TextTypes.headingOneText}/>
          <TextTp
        title={Common.kudos}
        style={styles.numberText}
        type={TextTypes.bodyOneText}/>
          </View>
 </View>
        </View>

    </View>
    </View>
}
export default ProfileCard
