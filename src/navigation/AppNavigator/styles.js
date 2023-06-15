import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: colors.headerBackgroundColor,
        height: 80,
        width:"100%",
        paddingTop: 5,
        alignItems: "center",
        justifyContent: "space-around",
    },
    title:{
        color: colors.titleFontColor,
        fontSize:45,
        fontFamily: fonts.itemFont,
        position:"relative",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userImg:{
        resizeMode:"contain",
        borderColor:"black",
        borderRadius: 30,
        height:"100%",
    },
    imgContainer:{
        resizeMode:"contain",
        borderColor:"black",
        height:"100%",
    },
})

export default styles;