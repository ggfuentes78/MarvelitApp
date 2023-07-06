import React from 'react'
import Series from '../../screens/Series'
import SeriesDetail from '../../screens/SeriesDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const SeriesNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Series List' component={Series} />
            <Stack.Screen name='Series Detail' component={SeriesDetail} />
        </Stack.Navigator>
    )
}

export default SeriesNavigator
