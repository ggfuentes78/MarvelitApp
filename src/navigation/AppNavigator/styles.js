import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        // marginLeft:10,
        backgroundColor: colors.headerBackgroundColor,
        height: 80,
        width:"100%",
        paddingTop: 5,
        alignItems: "center",
        justifyContent: "space-around",
    },
    title:{
        // flex:1,
        // width:"10%",
        color: colors.titleFontColor,
        fontSize:45,
        fontFamily: fonts.itemFont,
        position:"relative",
        alignItems: "center",
        justifyContent: "space-between",
        // left:100,
    },
    userImg:{
        resizeMode:"contain",
        // position:"relative",
        borderColor:"black",
        borderRadius: 30,
        // borderStyle:"solid",
        height:"100%",
    },
    imgContainer:{
        resizeMode:"contain",
        // position:"absolute",
        borderColor:"black",
        // borderStyle:"solid",
        height:"100%",
    },
})

export default styles;