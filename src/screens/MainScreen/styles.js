import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#231f20",
      marginBottom:20,
    },
    titleContainer:{
      marginTop: 0,
      width:"100%",
      color: colors.titleFontColor,
    },
    titleContainer2:{
      marginTop: 70,
      marginBottom: 15,
      fontSize:40,
      fontWeight: 500,
      color: "#f8f3f6"
    },
    listContainer:{
      flex: 5,
      marginHorizontal: 5,
      marginBottom: 70,
    
    },
    renderListContainer:{
      flex: 5,
      marginHorizontal: 5,
      marginVertical: 5,
    
    },
    renderItemStyle:{
      height: 150,
      flexDirection: "row",
      marginVertical: 15,
      marginHorizontal: 10,
      backgroundColor: "#4c4f56",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center" ,
      shadowColor: "white",
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 1},
      shadowRadius: 2,
      elevation: 7,
      position: "relative",
    },
    touchableItem:{
      height: 30,
      resizeMode: "contain"
    },
    itemImageStyle:{
      height: 140,
      resizeMode:"contain",
      right:120,
    },
    renderImageStyle:{
      height: 130,
      resizeMode:"contain",

      right:100,
    },
    textItemStyle2:{
      paddingLeft: 170,
      fontSize:30,
      textShadowColor:"black",
      textShadowOffset:{ width: 1, height: 1},
      textShadowRadius:5,
      textDecorationColor:"black",
      color:"#f8f3f6",
      position:"absolute",
    },
    itemStyle:{
      fontSize:30,
      textShadowColor:"black",
      textShadowOffset:{ width: 1, height: 1},
      textShadowRadius:5,
      textDecorationColor:"black",
      color:"#f8f3f6",
      position:"absolute",
    },
    favStyle:{
      height: 30,
      resizeMode:"contain",
      left:150,
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
    item: {
    },
    imgContainer:{
      height: 200,
      marginVertical: 15,
      marginHorizontal: 10,
      backgroundColor: colors.charactersListItemBackgroundColor,
      justifyContent: "center",
      alignItems: "center" ,
      shadowColor: colors.shadowColor,
      shadowOpacity: 0.3,
      shadowOffset: { width: 1, height: 1},
      shadowRadius: 2,
      elevation: 7,
      position: "relative"
    },
    itemImageStyle:{
      width: "95%",
      height:"95%",
      resizeMode:"contain",
    },
    textItemStyle3:{
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
    separador:{
      width: 400,
      paddingTop:10,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center" ,
    },
    subtitle:{
      backgroundColor: "#0a2b4e",
      width:"95%",
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
  });

  export default styles;