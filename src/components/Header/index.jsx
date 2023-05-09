import { Text, View } from "react-native";

import React from "react";
import styles from "./styles";

const Header = ({title, newStyles})=>{
    return(
        <View style={{...styles.header, ...newStyles}}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header;
