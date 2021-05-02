import React from 'react'
import { Image, View } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/calenderStyle'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import TextGroup from '../../../component/textGroup'
import { Common } from '../../../../constants/Common'
import MenuOption from '../../../../presentation/menu'
const PedningAction = (props) => {
  const onMenuPress = (item, index, type) => {
    console.log('aj', item, index, type)
  }
  const addMenuItem = (type) => {
    const menuList = [{ title: 'Add', type }, { title: 'Edit', type }, { title: 'Delete', type }]
    return <MenuOption
    menuList={menuList}
    type={type}
    icon={CommonImages.more}
    iconStyle={styles.calendrIcon}
    style={{ marginTop: 34 }}
    onPressMenuItem={onMenuPress}
    ></MenuOption>
  }

  return <View style={[styles.container, GlobalStyle.cardShadow]}>
      <View style={styles.flexRow1}>
      <Image
      style={styles.calendrIcon}
      source={CommonImages.home}
      />
      <TextTp
       type={TextTypes.subTitleMedium16Text}
        title={Common.pendingAction}/>
      </View>
      <View style={styles.seperator}></View>
      <View style={styles.group}>
      <TextGroup title={'Leave request from Howell'}
      value={'19 Jan - 20 Jan | Earned Leave'}/>
       {addMenuItem(1)}
      </View>
      <View style={styles.group}>
      <TextGroup title={'Performance review Q3 2020'}
      value={'6 Team members performance review \nis pending'}/>
      {addMenuItem(2)}

      </View>
    </View>
}
export default PedningAction
