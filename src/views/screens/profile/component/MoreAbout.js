import React from 'react'
import { Image, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/calenderStyle'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icontext from '../../../component/iconText'
const MoreAbout = () => {
  
  return <View style={[styles.container, GlobalStyle.cardShadow]}>
      <TextTp
       type={TextTypes.subTitleMedium16Text}
       style={{alignSelf:'flex-start',marginLeft:8,marginTop:8,}}
        title={'More about John'}/>
  
      <TouchableOpacity style={styles.groupAction}>
      <TextTp title={'Employment Details'}
      type={TextTypes.bodyTwoText}/>
      <TouchableOpacity>
          <Image style={styles.arrowDown}
           source={CommonImages.expand}></Image>
      </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.groupAction}>
      <TextTp title={'Pay Details'}
      type={TextTypes.bodyTwoText}/>
      <TouchableOpacity>
          <Image style={styles.arrowDown}
           source={CommonImages.expand}></Image>
      </TouchableOpacity>

      </TouchableOpacity>

      <TouchableOpacity style={styles.groupAction}>
      <TextTp title={'Data'}
      type={TextTypes.bodyTwoText}/>
      <TouchableOpacity>
          <Image style={styles.arrowDown}
           source={CommonImages.expand}></Image>
      </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.groupAction,{marginBottom:8}]}>
      <TextTp title={'Security'}
      type={TextTypes.bodyTwoText}/>
      <TouchableOpacity>
          <Image style={styles.arrowDown}
           source={CommonImages.expand}></Image>
      </TouchableOpacity>
      </TouchableOpacity>
      
     
    </View>
}
export default MoreAbout
