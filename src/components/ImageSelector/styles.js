import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

// import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview:{
        marginBottom: 10,
        borderColor: colors.headerBackgroundColor,
        borderWidth: 1,
        height: 200,
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
        height: "100%",
        width:"100%",
    },
})

export default styles;