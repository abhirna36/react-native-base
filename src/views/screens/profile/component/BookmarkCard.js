import React from 'react'
import { Image, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/bookMarkStyle'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { Color } from '../../../../style/Color'
const BookmarkCard = () => {
  

  return <View style={[styles.bookmarkContainer, GlobalStyle.cardShadow]}>
      <View style={{flex:1}}>
          <Image style={styles.bookIcon}
           source={CommonImages.camera}
          />
          <TextTp
          type={TextTypes.headingOneText}
          style={{fontSize:14}}
          title={'Feature profile'}/>
      </View>
      <View style={{flex:1}}>
          <Image style={styles.bookIcon}
           source={CommonImages.camera}
          />
          <TextTp
          type={TextTypes.headingOneText}
          style={{fontSize:14}}
          title={'Bookmark'}/>
      </View>
      <View style={{flex:1}}>
          <Image style={[styles.bookIcon,{tintColor:Color.primary}]}
           source={CommonImages.man}
          />
          <TextTp
          type={TextTypes.headingOneText}
          style={{fontSize:14,color:Color.primary}}
          title={'Gave Kudos'}/>
      </View>
     
    </View>
}
export default BookmarkCard
