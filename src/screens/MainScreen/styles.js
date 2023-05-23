import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#231f20",
      // alignItems: 'center',
      // justifyContent: 'center',
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
      marginVertical: 5,
    
    },
    renderItemStyle:{
      height: 150,
      flexDirection: "row",
      marginVertical: 15,
      marginHorizontal: 10,
      backgroundColor: "#4c4f56",
      fontSize:40,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center" ,
      shadowColor: "white",
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
    itemImageStyle:{
      height: 140,
      resizeMode:"contain",
      right:120,
    },
    textItemStyle:{
      paddingLeft: 140,
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
    }
  });

  export default styles;