import React from 'react'
import { Image, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/calenderStyle'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Icontext from '../../../component/iconText'
import { Color } from '../../../../style/Color'
const AboutMe = (props) => {
  
  return <View style={[styles.container, GlobalStyle.cardShadow]}>
      <Icontext title={"About"} 
      icon={CommonImages.add}
      iconText={"Edit"}/>
      <TextTp
       type={TextTypes.bodyTwoText}
       lineHeight={20}
       style={{alignSelf:'flex-start',marginLeft:8,marginTop:24,}}
        title={'Experienced Manager with a demonstrated history of working in the BPO, Insurance & Financial industries. Skilled in HRIT, HR operation, HR Analytics and Business Process Improvement. Strong professional with a PGDM focused in HR.'}/>
  <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:16}}>
  <TextTp title={'Interests'}
     style={{color:Color.textBlack}}
      type={TextTypes.medium14}/> 
      <FlatList
      style={{marginLeft:16}}
       contentContainerStyle={{flexGrow:1,}}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={['Computer Games','Music','Hockey', "Indoor", "Cricket","Travelling", "Book reading", "Hiking"]}
      renderItem={({item,index})=>{
          return <View style={{backgroundColor:Color.extraLight,padding:8,marginRight:16}}>
             <TextTp title={item}
     style={{color:Color.dark}}
      type={TextTypes.medium14}/>  
          </View>
      }}></FlatList>
  </View>
    

      <TouchableOpacity style={[styles.groupAction,{marginBottom:8,justifyContent:'flex-start'}]}>
      <TouchableOpacity>
          <Image style={[styles.arrowDown,{tintColor:Color.primary}]}
           source={CommonImages.man}></Image>
      </TouchableOpacity>
      <TextTp title={'Download Resume'}
      style={{color:Color.primary,marginLeft:8}}
      type={TextTypes.medium14}/>
     
      </TouchableOpacity>
      
     
    </View>
}
export default AboutMe
