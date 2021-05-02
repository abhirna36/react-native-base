import { StyleSheet } from 'react-native'
import { Color } from '../../../../../style/Color'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../utility'
const styles = StyleSheet.create({
  container: {
    height: 56,
    borderTopWidth: 1,
    marginTop: 1,
    borderTopColor: Color.extraLigthHover,
    backgroundColor: Color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  quickView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  dropDownIcon: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginLeft: 8
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end'
  },
  icons: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    tintColor: Color.dark,
    marginLeft: 24
  },
  profileContainer: {
    marginTop: 16,
    borderRadius: 10,
    marginHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: Color.white
  },
  profileContainerEdit: {
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 112,
    paddingHorizontal: 24,
    paddingBottom: 16,
    backgroundColor: Color.white
  },
  myTeamContainer: {
    marginTop: 16,
    borderRadius: 10,
    marginHorizontal: 16,
    padding: 16,
    paddingBottom: 16,
    backgroundColor: Color.white
  },
  coverImage: {
    height: 67,
    width: '100%',
    borderTopEndRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  coverImageEdit: {
    height: 144,
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  profileView: {
    height: 72,
    width: 72,
    borderWidth: 2,
    borderRadius: 72,
    marginTop: -50,
    alignSelf: 'center',
    borderColor: Color.profileBorder,
    overflow: 'hidden'
  },
  profileViewEdit: {
    height: 112,
    width: 112,
    borderWidth: 3,
    borderRadius: 112,
    marginTop: -56,
    alignSelf: 'center',
    borderColor: Color.profileBorder,
    overflow: 'hidden'
  },
  plist: {
    height: 48,
    width: 48,
    marginRight: 4,
    borderRadius: 48,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: Color.profileBorder,
    overflow: 'hidden'
  },
  imageStyle: {
    height: 72,
    width: 72,
    overflow: 'hidden',
    borderRadius: 72,
    borderWidth: 2
  },
  imageStyleEdit: {
    height: 112,
    width: 112,
    overflow: 'hidden',
    borderRadius: 112,
    borderWidth: 2
  },
  newImagelist: {
    height: 48,
    width: 48,
    overflow: 'hidden',
    borderRadius: 48,
    borderWidth: 2
  },
  likeView: {
    height: 76,
    backgroundColor: Color.extraLight,
    marginHorizontal: 25,
    marginTop: 16,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row'
  },
  viewIcon: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  },
  label: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: Color.cyanLight,
    height: 19,
    width: 42,
    top: 5,
    zIndex: 10,
    left: 35,
    borderRadius: 10
  },
  ViewsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  viewText: {
    color: Color.white,
    textAlign: 'center',
    fontSize: 12
  },
  textView: {
    alignSelf: 'center',
    marginLeft: 8
  },
  numberText: {
    color: Color.secondary,
    textAlign: 'center',
    fontSize: 12
  },
  seperator: {
    height: 54,
    backgroundColor: Color.secondaryLight,
    width: 1,
    alignSelf: 'center'
  },
  likeViews: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  profileList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 48,
    marginTop: 16
  },
  teamDesc: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 24,
    marginRight: 16
  },
  teamCeleb: {
    height: 36,
    width: 36,
    borderRadius: 36
  },
  textCelb: {
    color: Color.secondaryHover,
    marginLeft: 16,
    flex: 1
  },
  seeteam: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 12,
    color: Color.primary,
    marginTop: 4
  },
  teamTitle: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 16
  },
  profileEditIcon: {
    height: 32,
    zIndex: 5,
    width: 32,
    position: 'absolute',
    backgroundColor: Color.primaryLight,
    right: -18,
    top: 16,
    borderRadius: 24,
    justifyContent: 'center'
  },
  cameraIcon: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    tintColor:Color.primary
  },
  backArrow: {
    tintColor: Color.primary,
    marginRight: 8,
    height: 24,
    width: 24,
    alignSelf: 'center'
  },
  editSection: {
    flexDirection: 'row',
    marginBottom: 72,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: SCREEN_WIDTH - 32
  },
  gobackButton: {
    height: 40,
    width: 124,
    justifyContent: 'flex-start',
    paddingLeft: 16,
    flexDirection: 'row',
    backgroundColor: Color.primaryLight,
    borderRadius: 5
  },
  backText: {
    color: Color.primary,
    fontSize: 16,
    alignSelf: 'center'
  },
  coverCamera: {
    height: 36,
    marginTop: 4,
    width: 36,
    backgroundColor: Color.primaryLight,
    borderRadius: 36,
    justifyContent: 'center'
  },
  groupView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16
  },
  iconView: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginRight: 16,
    tintColor: Color.dark
  },
  grouptext: {
    color: Color.secondary,
    alignSelf: 'center'
  },
  designation: {
    marginTop: 4,
    color: Color.secondary,
    alignSelf: 'flex-start',
    marginBottom: 8
  }
})
export default styles
