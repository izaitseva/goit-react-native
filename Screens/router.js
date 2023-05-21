import MainTabs from '../components/tabs/MainTabs';
import LoginScreen from './auth/LoginScreen';
import RegistrationScreen from './auth/RegistrationScreen';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'

const AuthStack = createStackNavigator();

export default function useRoute(isAuth) {

    if (!isAuth) {
        return (
            <AuthStack.Navigator>
                <AuthStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
                <AuthStack.Screen options={{ headerShown: false }} name='Registration' component={RegistrationScreen} />
            </AuthStack.Navigator>
        )
    }

    return (
        <MainTabs />
    )

}

