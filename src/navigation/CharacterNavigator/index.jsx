import CharacterDetail from '../../screens/CharacterDetail'
import Characters from '../../screens/Characters'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const CharacterNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Character List' component={Characters}/>
            <Stack.Screen name='Character Detail' component={CharacterDetail} />
        </Stack.Navigator>
    )
}

export default CharacterNavigator
