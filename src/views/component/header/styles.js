import { StyleSheet } from 'react-native'
import { hasNotch } from 'react-native-device-info'
import { Color } from '../../../style/Color'
import { isIOS } from '../../../utility'
const styles = StyleSheet.create({

  headerContainer: {
    height: hasNotch() ? 80 : 56,
    width: '100%',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: Color.white,
    shadowColor: Color.darkLight,
    shadowOffset: {
      width: 0,
      height: 10
    },
    borderBottomColor: Color.extraLigthHover,
    elevation: 1
  },
  backtouchView: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginLeft: 16
  },
  drawerIcon: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginLeft: 16
  },
  backIcon: {
    height: '100%',
    width: '100%',

    alignSelf: 'center'
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 18,
    alignSelf: 'center',

    flex: 1
  },
  headerView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: hasNotch() ? 36 : 0,
    flexDirection: 'row'
  },
  profile: {
    height: 24,
    width: 24,
    borderRadius: 24,
    borderWidth: 1,
    marginRight: 16,
    backgroundColor: Color.extraLigthHover,
    alignSelf: 'center',
    borderColor: Color.extraLigthHover
  },

  tabBarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBarIcon: (isFocused) => {
    return {
      resizeMode: 'contain',
      height: 30,
      width: 30,
      tintColor: isFocused ? Color.white : Color.theme
    }
  },
  mainLogoStyle: {
    height: 18,
    width: 18,
    backgroundColor: Color.black,
    marginLeft: 18,
    alignSelf: 'center',
    marginBottom: 8
  },
  mainLogoStyle1: {
    height: 20,
    width: 20,
    backgroundColor: Color.black,
    marginLeft: 18,
    marginRight: 26,
    alignSelf: 'center',
    marginTop: 8
  },
  tabView: {
    flexDirection: 'row',
    backgroundColor: Color.black,
    justifyContent: 'space-evenly',
    height: 75,
    paddingTop: 8
  },
  titleCOntainer: { flex: 1, alignContent: 'center' },
  titleHeader1: {
    fontSize: 14,
    backgroundColor: Color.black,
    alignSelf: 'center',
    color: Color.black
  },
  customHeaderTitleStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: Color.white
  },
  customHeaderStyle: {
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: Color.white,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: Color.white,
    borderBottomColor: isIOS() ? Color.black : Color.theme,
    elevation: 1
  },
  tabBarIconText: (isFocused) => {
    return {
      color: isFocused ? Color.white : Color.black,
      textAlign: 'center'

    }
  },
  tabBarStyle: {
    flexDirection: 'row'
  },
  imageContianer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBarShadow: {
    backgroundColor: Color.black,
    paddingTop: 6,
    elevation: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 19,
    shadowColor: Color.black,
    shadowOffset: { height: 10, width: 0 }
  },
  profileHeader: {
    height: 24,
    width: 24,
    borderRadius: 24,
    borderWidth: 1,
    marginRight: 16
  }
})
export default styles
