/* eslint-disable react/prop-types */
import React from 'react'
import { View,Image, TouchableOpacity } from 'react-native'
import { CommonImages } from '../../constants/images'

import TextTp from '../../presentation/text/TextTp'
import TextTypes from '../../presentation/text/TextTypes'
import { Color } from '../../style/Color'

const Icontext = (props) => {
  const { title, style,iconText,icon } = props
  return <View style={[style, { flex: 1, marginTop: 8 ,justifyContent:'space-between',flexDirection:'row'}]}>
          <TextTp type={TextTypes.headingOneText}
          numberOfLines={1}
          lineHeight={20}
          style={{ alignSelf: 'flex-start', fontSize:16 }}
          title={title}/>
          <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',}}>
              <Image style={{height:20,width:20,marginRight:4, tintColor:Color.primary,alignSelf:'center'}} source={icon} resizeMode={'contain'}/>
          <TextTp type={TextTypes.medium14}
          style={{ color: Color.secondary, alignSelf: 'center',color:Color.primary,fontSize:14 }}
          title={iconText}/>
          </TouchableOpacity>
         
      </View>
}
export default Icontext
