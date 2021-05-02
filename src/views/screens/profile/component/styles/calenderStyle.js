import { StyleSheet } from 'react-native'
import { Color } from '../../../../../style/Color'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: Color.white,
    padding: 16
  },
  calendrIcon: {
    height: 18,
    width: 16,
    tintColor: Color.dark,
    alignSelf: 'center',
    marginRight: 12
  },
  moreIcon: {
    height: 18,
    width: 16,
    tintColor: Color.dark,
    alignSelf: 'center',
    flex: 0
  },
  rightArrow: {
    height: 24,
    width: 24,
    tintColor: Color.dark,
    transform: [{ rotate: '270deg' }],
    marginLeft: 16
  },
  leftArrow: {
    height: 24,
    width: 24,
    tintColor: Color.dark,
    transform: [{ rotate: '90deg' }]
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRow1: {
    flexDirection: 'row',
    marginTop: 8
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftView: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  seperator: {
    marginTop: 16,
    height: 1,
    marginLeft: -16,
    marginRight: -16,
    backgroundColor: Color.secondaryDisable,
    opacity: 0.2
  },
  today: {
    backgroundColor: Color.secondaryLight,
    borderRadius: 5,
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  seeCalender: {
    fontSize: 12,
    color: Color.primary,
    alignSelf: 'flex-start',
    marginBottom:8,
    marginTop: 16
  },
  holiday: {
    fontSize: 12,
    marginTop: 34
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  groupAction: {
    flexDirection: 'row',
    marginTop:16,
    justifyContent: 'space-between',
    marginHorizontal:8,
  },
  arrowDown:{
    height:24,
    width:24,
    alignSelf:'center',
    tintColor:Color.dark
  }
})
export default styles
