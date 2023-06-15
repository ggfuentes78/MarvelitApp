import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.mainBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer:{
      flex:1,
      flexDirection: "row",
      height:30,
      width: 400,
      marginTop: 20,
      justifyContent: "center" ,
      alignItems: "center" ,
    },
    titleText:{
      fontSize:40,
      fontWeight: 500,
      color: colors.titleFontColor,
    },
    listContainer:{
      flex: 3,
      marginHorizontal: 5,
      marginVertical: 20,
    
    },
    renderItemStyle:{
      height: 200,
      flexDirection: "row",
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
      width: "100%",
      resizeMode:"contain",
      marginTop: 100,
    },
    textItemStyle:{
      fontSize:30,
      textShadowColor: colors.textShadowColor,
      textShadowOffset:{ width: 1, height: 1},
      textShadowRadius:5,
      textDecorationColor: colors.textDecorationColor,
      color: colors.listItemTextColor,
      position:"absolute",
      fontFamily: fonts.itemFont,
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
    }
  });

  export default styles;