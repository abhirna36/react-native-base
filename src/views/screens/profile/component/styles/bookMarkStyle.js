import {StyleSheet} from 'react-native'
import { Color } from '../../../../../style/Color';
const styles= StyleSheet.create({
bookmarkContainer:{
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: Color.profileBorder,
    padding: 16,
    flexDirection:'row',
    justifyContent:'space-between',
},
bookIcon:{
    height:20,
    width:20,
    marginBottom:12,
     alignSelf:'center'
    },
    companyContainer:{
        flex: 1,
        marginTop: 16,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: Color.white,
        padding: 16,
        paddingTop:0,
        paddingBottom:0,
    },
    likeIcon:{
        height:36,
        width:36,
        marginRight:16,
        alignSelf:'center',
    },
    likeView:{
        height:48,
        marginBottom:16,
        backgroundColor:Color.extraLight,
        flexDirection:'row',
        paddingHorizontal:16,
    },
    textGroup:{
    justifyContent:'center',
    flexDirection:'row',
    flex:1,
    marginTop:8
},
exp:{
    justifyContent:'center',
    flexDirection:'row',
    flex:1,
    marginTop:24,
    marginBottom:16,
    backgroundColor:Color.extraLight,
    paddingHorizontal:16,
    paddingBottom:16
},
contantInfo:{
    flex:1,
    color:Color.primary,
    alignSelf:'flex-start',
    marginTop:24
}
})
export default styles;