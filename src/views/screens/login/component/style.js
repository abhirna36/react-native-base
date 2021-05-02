import { StyleSheet } from 'react-native'
import { Color } from '../../../../style/Color'

const PhoneStyles = StyleSheet.create({
  pagerContainer: { height: 153, width: '100%' },
  pagerIndicatorContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: -20 },
  itemContainer: { width: '100%', flexDirection: 'row', backgroundColor: Color.dark },
  title: { letterSpacing: 0.15, lineHeight: 24, color: Color.white, alignSelf: 'flex-start', fontWeight: '500' },
  description: { letterSpacing: 0.25, lineHeight: 20, alignSelf: 'flex-start', color: Color.loginSliderTextColor, marginTop: 8, flexWrap: 'wrap', width: 260 },
  selectedPagerIndicator: { width: 24, height: 12, borderRadius: 6, backgroundColor: Color.yellowDark, marginHorizontal: 4 },
  nonSelectedPagerIndicator: { width: 12, height: 12, borderRadius: 6, backgroundColor: Color.secondary, marginHorizontal: 2 },
  imageStyle: { width: 64, height: 64 },
  imageContainer: { justifyContent: 'center', paddingHorizontal: 16 }
})
export default PhoneStyles
