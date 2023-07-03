import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import wolverine from '../../../assets/image-placeholder.png'

const Header = ({ navigation, title})=>{
    const user=useSelector(state=>state.user)
    console.log("UUUSS3", user)
    const placeHolderUser =wolverine
    console.log("LLL", user.userImg);
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.imgContainer}>
                <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("User")}>
                    <Image style={styles.image} source={ user.userImg===null ? placeHolderUser : {uri:user.userImg}}/>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Header;
