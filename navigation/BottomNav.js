
import React, { useEffect, useState, Node, setState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';


const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"

            screenOptions={
                {
                    headerShown: false,
                    tabBarShowLabel: false,
                    showLabel: false,
                    style: {
                        bottom: 0,
                        left: 0,
                        right: 0,
                        elevation: 0,
                        height: 55,
                        borderWidth: 4,
                        // ...styles.shadow
                    }
                }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused ? '#2981e6' : '#748c94'
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }} >
                            <Image
                                source={require('../assets/icons/user.png')}
                                resizeMode='contain'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused ? '#2981e6' : '#748c94'
                                }}
                            />
                        </View>
                    )
                }}
            />

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default BottomNav;