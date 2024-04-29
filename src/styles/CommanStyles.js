import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CommanStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    onbordingContainer: {
        flex: 1,
        backgroundColor: 'black'
    },
    filledCircle: {
        borderRadius: 10,
        width: 8,
        height: 8,
        backgroundColor: Colors.dgo_white_600,
    },
    emptyCircle: {
        borderRadius: 10,
        width: 8,
        height: 8,
        backgroundColor: Colors.dgo_black_400,
        opacity: 0.2
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    carouselIndicatorView: {
        position: 'absolute',
        bottom: windowHeight / 3,
        left: 0,
        zIndex: 5,
        alignItems: "center",
        width: windowWidth,
    },
    fullWindowView: {
        width: windowWidth,
        height: windowHeight + 50,
        zIndex: 1,
        borderRadius: 10
    },
    caroasalScroll: {
        width: windowWidth,
    },
    caroasalScrollContent: {
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
    },
    onboardingContainer: {
        paddingBottom: 70,
        paddingHorizontal: 20,
        paddingTop: windowWidth / 5,
        justifyContent: 'space-between',
        flex: 1,
        zIndex: 1
    },
    onboardingLogo: {
        width: windowWidth / 2.5,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 40
    },
    headingLogo: {
        width: windowWidth / 3,
        height: 25,
        resizeMode: 'contain',
        marginBottom: 15
    },
    onboardingTitle: {
        color: Colors.dgo_white_600,
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 27,
        textAlign: 'center',
        marginBottom: 20
    },
    center: {
        alignItems: 'center',
    },
    onboardingSubTitle: {
        color: Colors.dgo_white_600,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center'
    },
    onboardingBottomContainer: {
        // backgroundColor:'red',
        height: (windowHeight / 3) - 70,
        justifyContent: 'space-between'
    },
    signInContentContainer: {
        flex: 1,
        zIndex: 5,
        padding: 20
    },
    joinNowContentContainer: {
        flex: 1,
        zIndex: 99999999,
        padding: 20
    },
    font18: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 22,
        color: Colors.dgo_black_100,
        // backgroundColor:'red'
    },
    font14: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 17,
        color: Colors.dgo_black_100,
    },
    font14Gray:{
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 17,
        color: Colors.dgo_black_200,
        paddingLeft:10
    },
    font12: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 15,
        color: Colors.dgo_black_200,
    },
    blueFont14: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 17,
        color: Colors.dgo_blue_200,
    },
    mediumIcon: {
        width: 48,
        height: 48,
        marginLeft: 30
    },
    primaryTitle22: {
        fontSize: 22,
        color: Colors.dgo_blue_200,
        lineHeight: 27,
        fontWeight: '700'
    },
    innerContainer: {
        marginTop: 30,
        // marginBottom:100,
        justifyContent: 'space-between',
        height: windowHeight - 250
        // backgroundColor:'red'
    },
    textInputParent: {
        marginTop: 10
    },
    textInputView: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: Colors.dgo_black_400,
        borderRadius: 8,
    },
    textInput: {
        paddingHorizontal: 15,
        width: windowWidth - 114,
        fontSize: 16,
        fontWeight: '500'
    },
    bottomSheetView: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: Colors.dgo_white_600,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 10

    },
    fpBottomSheetView: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: Colors.dgo_white_600,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 50

    },
    horizontalLine: {
        height: 1,
        backgroundColor: Colors.dgo_black_400,
        width: 132,
        // backgroundColor:'red'

    },
    buttonImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    codeFieldRoot: { marginVertical: 10 },
    cell: {
        width: 43,
        height: 48,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: Colors.dgo_black_400,
        textAlign: 'center',
        borderRadius: 8
    },
    focusCell: {
        borderColor: '#000',
    },
    weakPasswordSection: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width:windowWidth-40,
        // backgroundColor:'red'
    },
    pwStrength: {
        width: 74,
        height: 4,
        borderRadius: 4,
        marginRight: 8
    },
    bigIcon: {
        width: 150,
        height: 150,
        marginVertical: 40
    },
    searchTextInputView: {
        backgroundColor: Colors.dgo_black_400,
        padding: 8,
        width: windowWidth - 100,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',

    },
    item: {
        paddingVertical: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // marginHorizontal: 16,
    },
    tabBarView: {
        flex: 1,
        height: 80,
        backgroundColor: Colors.dgo_white_600,
        borderTopWidth: 1,
        borderTopColor: Colors.dgo_black_400,
        alignItems: 'center'
    },
    tabFocus: {
        backgroundColor: Colors.dgo_blue_200,
        height: 4,
        width: 85,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    tabOutFocus: {
        backgroundColor: Colors.dgo_white_600,
        height: 4,
        width: 85
    },
    tabIconView: {
        paddingVertical: 5
    },
    homeHeader: {
        position:'absolute',
        top:0,
        paddingTop:55,
        zIndex:999,
        alignItems:'center',
        paddingBottom:20,
        // paddingTop:800,
        width: windowWidth,
        height:120
    },
    homeHeaderTopScrolled: {
        position:'absolute',
        top:0,
        paddingTop:55,
        zIndex:999,
        alignItems:'center',
        backgroundColor:Colors.dgo_white_600,
        width: windowWidth,
        paddingBottom:20,
        borderBottomWidth:1,
        borderColor:Colors.dgo_black_300,
        height:120
    },
    homeSliderImage:{
        height:windowHeight/2,
        width:windowWidth,
    },
    homeSliderGradiant:{
        height:windowHeight/2,
        width:windowWidth,
        padding:15,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    homeSearchView:{
        backgroundColor:Colors.dgo_white_600,
        borderWidth:1,
        borderColor:Colors.dgo_black_400,
        borderRadius:100,
        paddingVertical:15,
        flexDirection:'row',
        width:windowWidth-80,
        justifyContent:'center',
        alignItems:'center'
    },
    homeSearchViewParent:{
        position:'absolute',
        bottom:-25
    },
    whiteFont10:{
        fontSize:10,
        color:Colors.dgo_white_600,
        fontWeight:'500'
    },
    whiteFont12:{
        fontSize:12,
        color:Colors.dgo_white_600,
        fontWeight:'500'
    },
    smallBadgeWhite:{
        paddingVertical:4,
        paddingHorizontal:8,
        flexDirection:'row',
        borderWidth:1,
        borderColor:Colors.dgo_black_400,
        borderRadius:20,
        backgroundColor:Colors.dgo_white_600,
        alignItems:'center',
        
    },
    smallBadgeTransparent:{
        paddingVertical:8,
        paddingHorizontal:12,
        flexDirection:'row',
        borderWidth:1,
        borderColor:Colors.dgo_black_200,
        borderRadius:20
    },
    cardWithBottomText:{
        width:windowWidth/1.5,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:Colors.dgo_black_400,
        marginRight:15,
        backgroundColor:Colors.dgo_white_600
    },
    listHeader:{
        padding:15,
        paddingTop:20
    },
    font16Gray:{
        color:Colors.dgo_black_200,
        fontSize:16,
        fontWeight:'500',
        lineHeight:20
    },
    recommendedPlanImageStyle:{
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    recommendedPlanImage:{
        width:windowWidth/1.5,
        height:150,
    },
    recommendedPlanGradiant:{
        width:windowWidth/1.5,
        height:150,
        padding:15,
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    font10:{
        fontSize:10,
        color:Colors.dgo_black_100,
        fontWeight:'500'
    },
    recommendedPlanCardBottom:{
        paddingVertical:10,
        paddingHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    recommendedCardTitle:{
        width:windowWidth/2.5,
        fontSize:12,
        color:Colors.dgo_black_100,
        fontWeight:'500'
    },
    verticalLineShort:{
        marginRight:5,
        width:1,
        height:12,
        backgroundColor:Colors.dgo_black_400
    },
    dreamDestinationCardImageBackground:{
        width:150,
        height:170,
        marginHorizontal:7.5
    },
    dreamDestinationCardImage:{
        borderRadius:8
    },
    dreamDestinationCardGradiant:{
        flex:1,
        borderRadius:8,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingVertical:10,
        paddingHorizontal:12
    },
    dreamlyExperienceCardImage:{
        borderRadius:8
    },
    dreamlyExperienceCardImageBackground:{
        width:windowWidth/1.5,
        marginHorizontal:7.5,
        height:170,
        marginBottom:10
    },
    dreamlyExperienceCardGradiant:{
        flex:1,
        borderRadius:8,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingVertical:10,
        paddingHorizontal:12
    },
    header:{
        height:120,
        backgroundColor:Colors.dgo_white_600,
        justifyContent:'flex-end',
        paddingBottom:24,
        borderBottomWidth:0.5,
        borderColor:Colors.dgo_black_300
    },
    headerInner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:windowWidth,
        paddingHorizontal:16,
    },
    tripListView:{
        width:windowWidth-30,
        backgroundColor:Colors.dgo_white_600,
        marginLeft:15,
        borderRadius:8,
        flexDirection:'row',
        marginBottom:10
    },
    tripListImage:{
        width:100,
        height:100,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },
    tripListImageBackground:{
        width:100,
        height:100,

    },
    tripCardInnerView:{
        padding:12,
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1
    },
    tripCardInnerViewRight:{
        justifyContent:'space-between'
    }
})

export default CommanStyles