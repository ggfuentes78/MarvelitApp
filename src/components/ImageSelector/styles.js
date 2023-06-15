import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom:20,
        backgroundColor: colors.mainBackgroundColor,
        
    },
    preview:{
        marginBottom: 20,
        justifyContent: "center",
        backgroundColor: "white",
        height: 300,
        width: 300,
        width:"100%",
        alignItems: "center",
    },
    image:{
        height: "100%",
        width:"100%",
        resizeMode:"contain",
        
    },
    placeHolderImg:{
        height: "100%",
        resizeMode:"contain",
    },
    btnStyle:{
        width: 10
    }
})

export default styles;