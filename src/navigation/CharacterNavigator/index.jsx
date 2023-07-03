import CharacterDetail from '../../screens/CharacterDetail'
import Characters from '../../screens/Characters'
import ComicDetail from '../../screens/ComicDetail'
import EventDetail from '../../screens/EventDetail'
import React from 'react'
import SeriesDetail from '../../screens/SeriesDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const CharacterNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Character List' component={Characters}/>
            <Stack.Screen name='Character Detail' component={CharacterDetail} />
            <Stack.Screen name='Comic Detail' component={ComicDetail} />
            <Stack.Screen name='Event Detail' component={EventDetail} />
            <Stack.Screen name='Series Detail' component={SeriesDetail} />
        </Stack.Navigator>
    )
}

export default CharacterNavigator
