import { Image, TouchableOpacity } from 'react-native'

import CharacterDetail from '../../screens/CharacterDetail'
import Characters from '../../screens/Characters'
import Comics from '../../screens/Comics'
import MainScreen from '../../screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Teams from '../../screens/Teams'
import UserScreen from '../../screens/UserScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import styles from './styles'
import wolverine from "../../../assets/wolverine1.png";

const AppNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Main' component={MainScreen} options={()=>({
                title:"MARVEL",
                headerRight: ()=>(
                    <TouchableOpacity style={styles.imgContainer} onPress={()=>console.log("user!")}>
                        <Image style={styles.userImg} souce={wolverine}/>
                    </TouchableOpacity>
                )
            })}/>
            <Stack.Screen name='Character List' component={Characters}/>
            <Stack.Screen name='Comics' component={Comics}/>
            <Stack.Screen name='Teams' component={Teams}/>
            <Stack.Screen name='Character Detail' component={CharacterDetail} />
            <Stack.Screen name='User' component={UserScreen}/>
        </Stack.Navigator>
    )
}

export default AppNavigator
