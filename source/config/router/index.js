import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../../pages/home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;