/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { hasNotch } from 'react-native-device-info'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonImages } from '../../../constants/images'
import { drawerJson } from '../../../constants/json/drawerJson'
import TextTp from '../../../presentation/text/TextTp'
import TextTypes from '../../../presentation/text/TextTypes'
import styles from './style'
const DrawerItem = (props) => {
  const [drawerList, setDrwaerList] = useState(drawerJson(props.navigation))
  const onClickExpand = (item, indx) => {
    const list = [...drawerList]
    list.map((item, index) => {
      if (indx === index) {
        item.selected = true
      } else {
        item.selected = false
      }
    })
    setDrwaerList(list)
    if (!item.list) {
      item.navigate()
      props.navigation.closeDrawer()
    }
  }
  const onSubItemClick = (item, index, ele, idx) => {
    const subList = item.list
    subList.map((item) => {
      item.selected = false
    })
    subList[idx].selected = true
    const list = [...drawerList]
    list[index].list = subList
    setDrwaerList(list)
    props.navigation.closeDrawer()
    ele.navigate()
  }
  const itemRender = ({ item, index }) => {
    return <View key={index}>
            <TouchableOpacity
            onPress={() => { onClickExpand(item, index) }}
             style={styles.itemView}>
                <View style={styles.viewRow}>
                    <Image style={styles.iconStyle} source={item.icon} />
                    <TextTp type={TextTypes.subTitleOneText}
                        style={styles.titleText(item.selected)}
                        title={item.title} />
                </View>
                {item.list
                  ? <TouchableOpacity
                        onPress={() => { onClickExpand(item, index) }}>
                        <Image style={styles.expandIcon(item.selected)}
                         source={CommonImages.expand} />
                    </TouchableOpacity>
                  : null}

            </TouchableOpacity>
            {item.selected && item.list
              ? item.list.map((ele, idx) => {
                return <TouchableOpacity
                         key={ele.title}
                        onPress={() => { onSubItemClick(item, index, ele, idx) }}
                        style={styles.subItemView(ele.selected)}>
                        <TextTp type={TextTypes.subTitleOneText} style={styles.sublisttext} title={ele.title} />
                    </TouchableOpacity>
              })
              : null}
        </View>
  }
  return <View style={styles.container}>
        <FlatList data={drawerList}
            contentContainerStyle={{ marginTop: hasNotch() ? 52 : 36 }}
            keyExtractor={(item, index) => String(index)}
            renderItem={itemRender}></FlatList>
    </View>
}
export default DrawerItem
