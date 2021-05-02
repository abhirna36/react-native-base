import React, { useEffect, useState } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { LoginImages } from '../../../constants/images'
import TextTp from '../../../presentation/text/TextTp'
import TextTypes from '../../../presentation/text/TextTypes'
import ButtonTp from '../../../presentation/button/ButtonTp'
import ButtonTypes from '../../../presentation/button/ButtonTypes'
import { Color } from '../../../style/Color'
import SliderComponent from './component/Slider'
import PhoneStyles from './style'
import { Common } from '../../../constants/Common'
import { Body, CheckBox, Form, Icon, Input, Item, Label } from 'native-base'
import { authenticateUser } from '../../../actions/LoginAction'
import ApiClient from '../../../apiClient'

const LoginScreen = (props) => {
  const [companyName, setCompanyName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [saveLoginCheckbox, seetSaveLoginCheckbox] = useState(false)
  const [signInClicked, setSignInClicked] = useState(false)

  useEffect(() => {
    const apiClient = new ApiClient()
    apiClient.creatAxiosInstance()
  }, [])

  const onSignInClick = () => {
    setSignInClicked(true)
    if (checkFormValid()) {
      console.log('form valid')
      props?.authenticateUser().then((res) => {
        console.log('success')
      })
    }
  }

  const isCompanyNameError = () => {
    return (signInClicked && !companyName)
  }

  const isUserNameError = () => {
    return (signInClicked && !userName)
  }

  const ispasswordError = () => {
    return (signInClicked && !password)
  }

  const checkFormValid = () => {
    return companyName && userName && password
  }

  const renderHeaderLogo = () => {
    return (
        <View style={PhoneStyles.headerBackground}>
            <Image
                source={LoginImages.loginScreenSlider}
                style={PhoneStyles.headerLogoStyle}
                resizeMode={'contain'}/>
        </View>
    )
  }
  const renderForm = () => {
    return (<View>
        <Form>
            <Item floatingLabel style={{ marginLeft: 0 }} error={isCompanyNameError()}>
              <Label style={{ color: isCompanyNameError() ? Color.red : Color.dark }}>Company</Label>
              <Input value={companyName} style={{}} onChangeText={text => { setCompanyName(text) }}/>
            </Item>
            <Item floatingLabel style={{ marginLeft: 0 }} error={isUserNameError()}>
              <Label style={{ color: isUserNameError() ? Color.red : Color.dark }}>Username</Label>
              <Input value={userName} onChangeText={text => { setUserName(text) }}/>
            </Item>
            <Item floatingLabel style={{ marginLeft: 0 }} error={ispasswordError()}>
              <Label style={{ color: ispasswordError() ? Color.red : Color.dark }}>Password</Label>
              <Input value={password} onChangeText={text => { setPassword(text) }} password/>
              <Icon name='eye' style={{ color: Color.secondaryDisable }} onPress={() => { console.log('hello') }}/>
            </Item>
            <Item style={PhoneStyles.checkboxContainer}>
                <CheckBox
                    style={{ marginLeft: 0, borderRadius: 4 }}
                    checked={saveLoginCheckbox}
                    onPress={() => seetSaveLoginCheckbox(!saveLoginCheckbox)}
                    color={Color.primary}/>
                <Body>
                    <TextTp
                        style={{ alignSelf: 'flex-start', marginLeft: 20 }}
                        title={Common.loginScreen.checkBoxText}
                        type={TextTypes.bodyTwoText} lineHeight={20} />
                </Body>
            </Item>
        </Form>
    </View>
    )
  }

  return (
    <ScrollView>
        {renderHeaderLogo()}
        <View style={PhoneStyles.newTagStyle}>
            <TextTp
                title={'New'}
                type={TextTypes.bodyThreeText}
                lineHeight={24}
                style={{ color: Color.white }}/>
        </View>
        <SliderComponent />
        <View style={PhoneStyles.container}>
            <TextTp
                title={Common.loginScreen.title}
                type={TextTypes.headingTwoText}
                style={PhoneStyles.title} />
            <TextTp
                title={Common.loginScreen.subHeading}
                type={TextTypes.bodyTwoText}
                style={PhoneStyles.subHeading} />
            {renderForm()}
            <ButtonTp
                title={Common.loginScreen.buttonText}
                type={ButtonTypes.secondaryLargeButton}
                style={PhoneStyles.btnStyle}
                textColor={Color.secondaryHover}
                onPress={onSignInClick}
                disabled={!checkFormValid()}/>
            <TextTp
                title={Common.loginScreen.ForgotPassText}
                type={TextTypes.bodyThreeText}
                style={PhoneStyles.forgotPassStyle}/>
        </View>
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, { authenticateUser })(LoginScreen)