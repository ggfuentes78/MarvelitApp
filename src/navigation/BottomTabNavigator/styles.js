import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    tabBar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        // marginTop:200,
        paddingTop: 15,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        height: 85,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
});

export default styles;