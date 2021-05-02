import { StyleSheet } from 'react-native'
import { Color } from '../../../style/Color'
import { FontName } from '../../../style/Font'
const PhoneStyles = StyleSheet.create({
  container: { marginTop: 40, paddingHorizontal: 26 },
  headerLogoStyle: { width: 100, height: 38, marginLeft: 26 },
  headerBackground: {
    height: 70,
    backgroundColor: Color.white
  },
  title: { lineHeight: 24, fontFamily: FontName.robotoRegular, alignSelf: 'flex-start' },
  subHeading: { marginTop: 10, color: Color.secondary, alignSelf: 'flex-start' },
  forgotPassStyle: { color: Color.primary, alignSelf: 'flex-end', marginTop: 16, lineHeight: 16, fontWeight: '500' },
  btnStyle: { backgroundColor: Color.extraLigthHover, marginTop: 16 },
  newTagStyle: { backgroundColor: Color.red, width: 56, height: 24, borderRadius: 80, position: 'absolute', right: 0, marginTop: 56, zIndex: 2, marginRight: 16 },
  checkboxContainer: { marginTop: 18, borderColor: 'transparent', marginLeft: -10 }
})
export default PhoneStyles
