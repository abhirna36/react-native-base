
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { LoginImages } from '../../../../constants/images'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import PagerView from 'react-native-pager-view'
import PhoneStyles from './style'

const SliderComponent = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [sliderList, setSliderList] = useState([
    { title: 'Knowledge & Collaboration', description: 'Real-time connection to employees,\nteams and mentors for learning,\nknowledge and career management' },
    { title: 'Knowledge & Collaboration', description: 'Real-time connection to employees,\nteams and mentors for learning,\nknowledge and career management' },
    { title: 'Knowledge & Collaboration', description: 'Real-time connection to employees,\nteams and mentors for learning,\nknowledge and career management' }])

  return (
    <View >
        <PagerView style={PhoneStyles.pagerContainer} initialPage={0} onPageSelected={(e) => { setSelectedIndex(e.nativeEvent.position) }}>
        {sliderList.map((item, index) => {
          return (
            <View key={index + 1 + ''} style={PhoneStyles.itemContainer}>
                <View style={PhoneStyles.imageContainer}>
                    <Image source={LoginImages.loginScreenSlider} style={PhoneStyles.imageStyle} resizeMode={'contain'} />
                </View>
                <View style={{ marginTop: 16 }}>
                    <TextTp
                        title={item.title}
                        type={TextTypes.headingTwoText}
                        style={PhoneStyles.title}/>
                    <TextTp
                        title={item.description}
                        type={TextTypes.bodyTwoText}
                        style={PhoneStyles.description} />
                </View>
            </View>
          )
        })}
        </PagerView>
        <View style={PhoneStyles.pagerIndicatorContainer}>
        {sliderList.map((item, index) => {
          return (
            (index === selectedIndex)
              ? <View key={index} style={PhoneStyles.selectedPagerIndicator}/>
              : <View key={index} style={PhoneStyles.nonSelectedPagerIndicator}/>
          )
        })}
        </View>
    </View>
  )
}

export default SliderComponent
