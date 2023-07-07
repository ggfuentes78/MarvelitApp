import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    container: {
      flex: 4,
      width:"100%",
      marginBottom:60,
      backgroundColor: colors.mainBackgroundColor,
    },
    titleContainer:{
      height:60,
      backgroundColor:"red",
      marginVertical: 15,
      justifyContent: "center" ,
      alignItems: "center" ,
    },
    titleText:{
      fontSize:40,
      fontWeight: 500,
      color: colors.titleFontColor,
    },
    listContainer:{
      flex: 4,
      marginHorizontal: 5,
      marginBottom: 10,
    
    },
    renderItemStyle:{
      height: 200,
      marginVertical: 15,
      marginHorizontal: 10,
      backgroundColor: colors.charactersListItemBackgroundColor,
      fontSize:40,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center" ,
      shadowColor: colors.shadowColor,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 1},
      shadowRadius: 2,
      elevation: 7,
      position: "relative"
    },
    imgContainer:{
      height: 200,
      marginVertical: 15,
      marginHorizontal: 10,
      backgroundColor: colors.charactersListItemBackgroundColor,
      fontSize:40,
      justifyContent: "center",
      alignItems: "center" ,
      shadowColor: colors.shadowColor,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 1},
      shadowRadius: 2,
      elevation: 7,
      position: "relative"
    },
    touchableItem:{
      height: 30,
      resizeMode: "contain"
    },
    filterIcon:{
      resizeMode:"contain",
      height: 60,
      position:"relative",
      left:-300,
    },
    itemImageStyle:{
      width: "95%",
      height:"95%",
      resizeMode:"contain",
    },
    textItemStyle:{
      fontSize:20,
      textShadowColor: colors.textShadowColor,
      textShadowOffset:{ width: 1, height: 1},
      textShadowRadius:5,
      textDecorationColor: colors.textDecorationColor,
      color: colors.listItemTextColor,
      fontFamily: fonts.itemFont,
    },
    listItemContainer:{
      width:200,
    },
    itemStyle:{
      fontSize:30,
      textShadowColor:colors.textShadowColor,
      textShadowOffset:{ width: 1, height: 1},
      textShadowRadius:5,
      textDecorationColor:colors.textDecorationColor,
      color:colors.listItemTextColor,
      position:"absolute",
    },
    favStyle:{
      height: 30,
      resizeMode:"contain",
      left:150,
      bottom:-50,
    },
    textContainerstyle:{
      width: 400,
      marginVertical: 15,
      marginHorizontal: 10,
      backgroundColor: colors.charactersListItemBackgroundColor,
      fontSize:40,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center" ,
      shadowColor: colors.shadowColor,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 1},
      shadowRadius: 2,
      elevation: 7,
    },
    separador:{
      flex:1,
      width: 400,
      paddingTop:10,
      marginBottom: 30,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center" ,
    },
    subtitle:{
      backgroundColor: colors.charactersListItemBackgroundColor,
      width:"95%",
      alignSelf:"center",
      justifyContent:"center",
      borderRadius: 100,
      color:'#fff',
      fontWeight:'bold',
      fontSize: 25,
      shadowColor: colors.shadowColor,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 1},
      shadowRadius: 2,
      elevation: 7,
      paddingLeft: 30,
      marginVertical: 10,
      marginHorizontal: 10,
    }
  });

  export default styles;