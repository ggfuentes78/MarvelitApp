import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        backgroundColor: colors.headerBackgroundColor,
        height: 80,
        width:"100%",
        paddingTop: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        color: colors.titleFontColor,
        fontSize:45,
        fontFamily: fonts.itemFont
    }
})

export default styles;