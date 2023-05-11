import { Image, Text, TouchableOpacity, View } from "react-native"

import Header from "../../components/Header";
import charactersImg from '../../../assets/characters1.png';
import comicsImg from '../../../assets/comics.jpg';
import styles from "./styles";
import teamsImg from '../../../assets/characters.png';

const MainScreen = ({navigation}) => {

    return (
        
        <View style={styles.container}>
            <View style={styles.container}>
                <Header title={"MarvelitApp"} newStyles={styles.titleContainer} />
            </View>
            <View style={styles.listContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate("Character List")}>
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.itemImageStyle} source={charactersImg} />
                        <Text style={styles.textItemStyle}>Characters</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Teams")}>
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.itemImageStyle} source={teamsImg} />
                        <Text style={styles.textItemStyle}>Teams</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Comics")} >
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.itemImageStyle} source={comicsImg} />
                        <Text style={styles.textItemStyle}>Comics</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

};

export default MainScreen;