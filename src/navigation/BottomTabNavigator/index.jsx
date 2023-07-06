import { Text, View } from "react-native";

import AppNavigator from "../AppNavigator";
import CharacterNavigator from "../CharacterNavigator";
import ComicsNavigator from "../ComicsNavigator";
import FavsScreen from "../../screens/FavsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import SeriesNavigator from "../SeriesNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTabs.Screen
                name="AppNavigator"
                component={AppNavigator}
                options={{
                    tabBarIcon: ()=>(
                        <View>
                            <Ionicons name="home" size={30} color="black" />
                            <Text>Index</Text>
                        </View>
                    ),
                }}    
            />
            <BottomTabs.Screen
                name="CharacterNavigator" 
                component={CharacterNavigator} 
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="person" size={30} color="black" />
                            <Text>Characters</Text>
                        </View>
                    ),
                }}
            />  
            <BottomTabs.Screen
                name="ComicsNavigator" 
                component={ComicsNavigator} 
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="book" size={30} color="black" />
                            <Text>Comics</Text>
                        </View>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="FavsNavigator" 
                component={FavsScreen} 
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionicons name="heart" size={30} color="black" />
                            <Text>Favorites</Text>
                        </View>
                    ),
                }}
            />    
        </BottomTabs.Navigator>
    );
};

