import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    userImg:{
        resizeMode:"contain",
        height:"100%",
    },
    imgContainer:{
        height:"100%",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 80,
        backgroundColor: colors.headerBackgroundColor,
    },
    title: {
        fontSize:40,
        fontFamily: fonts.itemFont,
        color: colors.titleFontColor,
    },
    image: {
        marginVertical: 5,
        width: 70,
        height:70,
        borderRadius: 35,
        borderColor:"#F1C40F",
        borderWidth:2,
        backgroundColor:"white",
    },
});


export default styles;