import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.mainBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:50,
    },
    titleContainer:{
      paddingTop:20,
      height:80,
      flexDirection: "row",
      width: 400,
      alignItems: "center" ,
    },
    titleText:{
      fontSize:40,
      fontWeight: 500,
      color: colors.titleFontColor,
    },
    listContainer:{
      flex: 3,
      width:400,
      marginTop: 10,
      marginHorizontal: 5,
      marginBottom: 25,
    
    },
    renderItemStyle:{
      height: 150,
      flexDirection: "row",
      marginHorizontal: 10,
      backgroundColor: colors.charactersListItemBackgroundColor,
      fontSize:40,
      borderRadius: 10,
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
    imgContainer:{
      height: 150,
      width: 110,
      resizeMode:"contain",
      borderStyle:"solid",
      borderColor: "#fff",
      borderWidth:5,
      left:-120,
    },
    itemImageStyle:{
      height: "100%",
      width: "100%",
      resizeMode:"contain",
    },
    textItemContainer:{
      width:"60%",
      justifyContent:"center",
      alignContent:"center",
      position:"absolute",
      left:150,
    },
    textItemStyle:{
      fontSize:30,
      textShadowColor: colors.textShadowColor,
      textShadowOffset:{ width: 1, height: 1},
      textShadowRadius:5,
      textDecorationColor: colors.textDecorationColor,
      color: "white",
      fontFamily: fonts.itemFont,
    },
    itemStyle:{
      fontSize:30,
      width:"90%",
      textShadowColor:colors.textShadowColor,
      textShadowOffset:{ width: 1, height: 1},
      textShadowRadius:5,
      textDecorationColor:colors.textDecorationColor,
      color:colors.listItemTextColor,
    },
    favStyle:{
      height: 30,
      resizeMode:"contain",
      left:70,
      bottom:-50,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 18,
      color: 'gray',
    },
    loaderContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    loaderText: {
      marginLeft: 10,
      fontSize: 16,
    },
  });

  export default styles;