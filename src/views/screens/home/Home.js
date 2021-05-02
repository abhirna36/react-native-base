/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { Text, View,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { dashboardWidget } from '../../../constants/Enum'
import { editProfileJson, myProfileJson } from '../../../constants/json/dashboardJson'
import TapplentBaseView from '../../component/tapplentBaseView'
import BookmarkCard from '../profile/component/BookmarkCard'
import EditProfileCard from '../profile/component/EditProfileCard'
import MyCalender from '../profile/component/MyCalender'
import MyTeam from '../profile/component/MyTeam'
import PedningAction from '../profile/component/PendingAction'
import ProfileCard from '../profile/component/profileCard'
import QuickLinkCard from '../profile/component/quicLinkCard'
import UpcomingHolidays from '../profile/component/UpcomingHoliday'
import CompanyDetailCard from '../profile/component/CompanyDetail'
import MoreAbout from '../profile/component/MoreAbout'
import AboutMe from '../profile/component/about'
// import { font } from '../../../constants/Font'

const Home = (props) => {
  const [isEdit, setIsEdit] = useState(true)
  const renderItem = ({ item, index }) => {
    switch (item) {
      case dashboardWidget.myProfile:
        return <ProfileCard/>
      case dashboardWidget.myTeam:
        return <MyTeam/>
      case dashboardWidget.myCalender:
        return <MyCalender/>
      case dashboardWidget.pendingAction:
        return <PedningAction/>
      case dashboardWidget.upcomingHoliday:
        return <UpcomingHolidays/>
      case dashboardWidget.editProfileCard:
        return <EditProfileCard/>
        case dashboardWidget.bookmarkCard:
          return <BookmarkCard/>
          case dashboardWidget.companyDetailCard:
          return <CompanyDetailCard/>
          case dashboardWidget.moreAboutCard:
          return <MoreAbout/>
          case dashboardWidget.aboutMeCard:
          return <AboutMe/>
      default:
        return null
    }
  }
  const getFlatListData = () => {
    if (isEdit) {
      return editProfileJson
    } else {
      return myProfileJson
    }
  }

  return (
        <TapplentBaseView
        onPressProfile={() => {
          !isEdit
            ? setIsEdit(true)
            : setIsEdit(false)
        }}
          {...props} scrollEnabled={false}>
            <QuickLinkCard/>
            <FlatList 
            keyExtractor={({item,index}) => item}
            bounces={false}
            contentContainerStyle={{paddingBottom:24}}
            data={getFlatListData()}
            renderItem={renderItem}/>

        </TapplentBaseView>

  )
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {})(Home)
