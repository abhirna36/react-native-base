import { StyleSheet } from 'react-native'
import { Color } from '../../../style/Color'
const style = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: (selected) => {
    return {
      color: selected ? Color.primary : Color.dark
    }
  },
  sublisttext: {
    alignSelf: 'flex-start'
  },
  expandIcon: (expand) => {
    return {
      height: 24,
      width: 24,
      alignSelf: 'flex-end',
      tintColor: expand ? Color.primary : Color.dark,
      transform: [{ rotate: expand ? '180deg' : '0deg' }]
    }
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 26,
    marginTop: 24,
    marginBottom: 12
  },
  viewRow: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  iconStyle: {
    height: 24,
    width: 24,
    marginRight: 16
  },
  subItemView: (selected) => {
    return {
      paddingVertical: 8,
      flex: 1,
      paddingLeft: 72,
      backgroundColor: selected ? Color.extraLight : null
    }
  }

})
export default style
