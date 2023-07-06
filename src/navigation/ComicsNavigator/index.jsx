import ComicDetail from '../../screens/ComicDetail'
import Comics from '../../screens/Comics'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ComicsNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Comics List' component={Comics} />
            <Stack.Screen name='Comic Detail' component={ComicDetail} />
        </Stack.Navigator>
    )
}

export default ComicsNavigator
