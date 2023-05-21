import PostsScreen from '../../screens/PostsScreen';
import CreatePostsScreen from '../../screens/CreatePostsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import CreatePostsTab from './CreatePostsTab';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native'

const MainTab = createBottomTabNavigator();

import React from 'react'

export default function MainTabs() {
    return (
        <MainTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle
            }}>
            <MainTab.Screen name='Posts'
                component={PostsScreen}
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="grid-outline" size={size} color={color} />
                }} />
            <MainTab.Screen name='CreatePosts'
                component={CreatePostsScreen}
                options={{
                    tabBarButton: (props) => <CreatePostsTab {...props} />
                }} />
            <MainTab.Screen name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ size, color }) => <Feather name="user" size={size} color={color} />
                }} />
        </MainTab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: '#d4d4d4',
        elevation: 0,
        backgroundColor: "#fff",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 9,
        marginBottom: 40
    }
})