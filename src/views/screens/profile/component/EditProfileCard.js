import React from 'react'
import { Image, ImageBackground, TouchableOpacity, View,Alert } from 'react-native'
import { GlobalStyle } from '../../../../style/GlobalStyles'
import styles from './styles/styles'
import TextTp from '../../../../presentation/text/TextTp'
import TextTypes from '../../../../presentation/text/TextTypes'
import { CommonImages } from '../../../../constants/images'
import { Common } from '../../../../constants/Common'
import { Color } from '../../../../style/Color'
import { isIOS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../utility'
import ImagePicker,{launchCamera, launchImageLibrary} from 'react-native-image-picker'
const EditProfileCard = () => {
    const options = {
        title: 'Select profile picture',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    const onProfileClick = () => {
        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
          } else if (response.error) {
          } else if (response.customButton) {
          } else {
            const photo = {uri: response.uri};
            const imageUri = isIOS()
              ? photo.uri.replace('file://', '/private')
              : photo.uri;
        
          }
        });
      };
    const pickImageFromGallery=()=>{
      ImagePicker.launchImageLibrary({}, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
              const photo = {uri: response?.uri};
              const imageUri = isIOS()
                ? photo?.uri?.replace('file://', '/private')
                : photo?.uri;
            }
          });
    }
    const captureImage=()=>{
      ImagePicker.launchCamera({}, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
              const photo = {uri: response?.uri};
              const imageUri = isIOS()
                ? photo?.uri.replace('file://', '/private')
                : photo?.uri;
            }
          }); 
    }
    const clickOnUploadProfile=()=>{
        Alert.alert(
            "Tapplent",
            "Select Cover photo",
            [
              {
                text: "Gallery",
                onPress: () => {
                    pickImageFromGallery();
                },
              },
              { text: "Camera", onPress: () => captureImage()},
              {
                text: "Library",
                onPress: () => {
                    alert("To be implement")
                },
            },
            {
                text: "Cancel",
                onPress: () => {

                },
                style:'cancel'
            }
            ]
          );
    }
  const renderCoverItem = () => {
    return <ImageBackground style={styles.coverImageEdit} source={CommonImages.dummy}>
        <View style={styles.editSection}>
            <TouchableOpacity style={styles.gobackButton}>
                <Image
                    style={[styles.backArrow]}
                    source={CommonImages.backIcon}
                    resizeMode='contain' />
                <TextTp
                    title={'Go back '}
                    style={styles.backText}
                    type={TextTypes.headingOneText} />
            </TouchableOpacity>
            <TouchableOpacity onPress={clickOnUploadProfile} style={[styles.coverCamera,
              GlobalStyle.cardShadow]}>
                <Image
                    style={styles.cameraIcon}
                    source={CommonImages.camera}
                    resizeMode='contain' />
            </TouchableOpacity>
        </View>
    </ImageBackground>
  }
  const renderProfileImage = () => {
    return <View style={{ width: 80, alignSelf: 'center' }}>
    <TouchableOpacity onPress={onProfileClick} style={[styles.profileEditIcon, GlobalStyle.cardShadow]}>
        <Image
            style={styles.cameraIcon}
            source={CommonImages.camera}

            resizeMode='contain' />
    </TouchableOpacity>
    <View style={styles.profileViewEdit}>
        <Image
            style={styles.imageStyleEdit}
            source={CommonImages.man_dummy}
            resizeMode='cover' />
    </View>
    </View>
  }
  return <View>
        {renderCoverItem()}
        <View style={[styles.profileContainerEdit, GlobalStyle.cardShadow]}>
        {renderProfileImage()}
            <TextTp
                title={'John Doe '}
                style={{ marginTop: 16, alignSelf: 'flex-start' }}
                type={TextTypes.headingTwoText} />
            <TextTp
                title={'Manager, HRIT'}
                style={styles.designation}
                type={TextTypes.bodyTwoText} />
                <View style={styles.groupView}>
                    <Image style={styles.iconView}
                     source={CommonImages.man}/>
                    <TextTp
                title={'10016082 | IPT-M333 | 1000044405'}
                style={styles.groupText}
                type={TextTypes.bodyTwoText} />
                </View>
                <View style={styles.groupView}>
                    <Image style={styles.iconView}
                     source={CommonImages.man}/>
                    <TextTp
                title={'Johndoe@interplex.com'}
                style={styles.groupText}
                type={TextTypes.bodyTwoText} />
                </View>
                <View style={styles.groupView}>
                    <Image style={styles.iconView}
                     source={CommonImages.man}/>
                    <TextTp
                title={'+6591803539'}
                style={styles.groupText}
                type={TextTypes.bodyTwoText} />
                </View>

        </View>
    </View>
}
export default EditProfileCard
