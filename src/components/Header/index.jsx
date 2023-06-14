import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";
import { useSelector } from "react-redux";

userAvatar=null

const Header = ({ navigation, title, user})=>{
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.imgContainer}>
                <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.navigate("User")}>
                    <Image style={styles.userImg}source={user.userImg}/>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Header;
