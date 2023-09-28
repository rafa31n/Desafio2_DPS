import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import AlbumScreen from '../screens/AlbumScreen';
import CancionScreen from '../screens/CancionScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Album' component={AlbumScreen} />
                <Stack.Screen name='Cancion' component={CancionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;