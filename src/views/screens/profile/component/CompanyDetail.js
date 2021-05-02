import React from 'react'
import { Image, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/bookMarkStyle'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import TextGroup from '../../../component/textGroup'
import { Common } from '../../../../constants/Common'
import MenuOption from '../../../../presentation/menu'
import { Color } from '../../../../style/Color'
const CompanyDetailCard = (props) => {
  

  return <View style={[styles.companyContainer, GlobalStyle.cardShadow]}>
      <TextGroup title={'Company'}
      titleType={TextTypes.bodyTwoText}
      valueType={TextTypes.medium14}
      value={'PT AMTEK ENGINEERING BATAM( AEB )'}/>
       <TextGroup title={'Section'}
       style={{marginTop:16}}
      titleType={TextTypes.bodyTwoText}
      valueType={TextTypes.medium14}
      value={'SUPPORT - ADMIN ( 2001S1005 )'}/>


    <View style={styles.textGroup}>
    <TextGroup title={'Department'}
       style={{flex:1,}}
      titleType={TextTypes.bodyTwoText}
      valueType={TextTypes.medium14}
      value={'ADMIN'}/>
        <TextGroup title={'Employment Type'}
       style={{flex:1}}
      titleType={TextTypes.bodyTwoText}
      valueType={TextTypes.medium14}
      value={'Permanent'}/>
    </View>

    <View style={styles.textGroup}>
    <TextGroup title={'Function'}
       style={{flex:1,}}
      titleType={TextTypes.bodyTwoText}
      valueType={TextTypes.medium14}
      value={'G&A( G&A )'}/>
        <TextGroup title={'Group'}
       style={{flex:1}}
      titleType={TextTypes.bodyTwoText}
      valueType={TextTypes.medium14}
      value={'Admin'}/>
    </View>

    <View style={[styles.textGroup,{marginTop:24}]}>
    <TextTp title={'Career Timeline'}
       style={{flex:1,color:Color.primary}}
       type={TextTypes.medium14}/>
        <TextTp title={'Personal details'}
       style={{flex:1,color:Color.primary}}
      type={TextTypes.medium14}
     />
    </View>

    <TextTp title={'Contact Info'}
       style={styles.contantInfo}
       type={TextTypes.medium14}/>


<View style={styles.exp}>
    <TextGroup title={'17 years 9 month'}
       style={{flex:1}}
      valueType={TextTypes.bodyTwoText}
      titleType={TextTypes.medium14}
     
      value={'in Company'}/>
        <TextGroup title={'1 years 8 month'}
       style={{flex:1}}
       valueType={TextTypes.bodyTwoText}
      titleType={TextTypes.medium14}
      value={'in Position'}/>
    </View>

    <View style={styles.likeView}>
        <Image style={styles.likeIcon} 
        source={CommonImages.view}/>
        <TextTp title={'20 '}
        type={TextTypes.bodyOneText} 
        style={{fontSize:20,color:Color.dark}}>
            <TextTp title={'Views'}
        type={TextTypes.bodyTwoText}
         style={{fontSize:12,color:Color.secondary}}></TextTp>
        </TextTp>
    </View>

    <View style={styles.likeView}>
        <Image style={styles.likeIcon} source={CommonImages.like}/>
        <TextTp title={'20 '}
        type={TextTypes.bodyOneText} 
        style={{fontSize:20,color:Color.dark}}>
            <TextTp title={'kudos'}
        type={TextTypes.bodyTwoText}
         style={{fontSize:12,color:Color.secondary}}></TextTp>
        </TextTp>
    </View>

    <View style={styles.likeView}>
        <Image style={styles.likeIcon} source={CommonImages.view}/>
        <TextTp title={'20 '}
        type={TextTypes.bodyOneText} 
        style={{fontSize:20,color:Color.dark}}>
            <TextTp title={'Features'}
        type={TextTypes.bodyTwoText}
         style={{fontSize:12,color:Color.secondary}}></TextTp>
        </TextTp>
    </View>
    </View>
}
export default CompanyDetailCard
