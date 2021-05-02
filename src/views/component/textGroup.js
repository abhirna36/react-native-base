/* eslint-disable react/prop-types */
import React from 'react'
import { View } from 'react-native'

import TextTp from '../../presentation/text/TextTp'
import TextTypes from '../../presentation/text/TextTypes'
import { Color } from '../../style/Color'

const TextGroup = (props) => {
  const { title, value, style,valueType,titleType } = props
  return <View style={[style, { flex: 1, marginTop: 16 }]}>
          <TextTp type={titleType?titleType: TextTypes.subTitleOneText}
          numberOfLines={1}
          lineHeight={20}
          style={{ alignSelf: 'flex-start' }}
          title={title}/>
          <TextTp type={valueType?valueType: TextTypes.subTitleOneText}
              lineHeight={20}
          style={{ color: Color.secondary, alignSelf: 'flex-start', marginTop: 4 }}
          numberOfLines={2}
          title={value}/>
      </View>
}
export default TextGroup
