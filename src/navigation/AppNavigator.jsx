import CharacterDetail from '../screens/CharacterDetail'
import Characters from '../screens/Characters'
import Comics from '../screens/Comics'
import MainScreen from '../screens/MainScreen'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Teams from '../screens/Teams'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={MainScreen}/>
                <Stack.Screen name='Character List' component={Characters}/>
                <Stack.Screen name='Comics' component={Comics}/>
                <Stack.Screen name='Teams' component={Teams}/>
                <Stack.Screen name='Character Detail' component={CharacterDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
