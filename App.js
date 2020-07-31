/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import ScannerView from './src/scanner/scanner-view';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import strings from './src/strings';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import PastScansView from './src/past-scans/past-scans-view';
import {realmService} from './src/RealmService';

function App() {
    const Stack = createStackNavigator();

    useEffect(() => {
        try {
            StatusBar.setBackgroundColor('#567be2', true);
        } catch (e) {
            console.log('Error: ', e);
        } finally {
            realmService.initDB()
                .then(() => {
                    SplashScreen.hide();
                });
        }
    }, []);

    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#567be2',
                },
                headerTintColor: '#fff',
                title: strings.appTitle,
            }}>
            <Stack.Screen name="PastScansView" component={PastScansView}/>
            <Stack.Screen name="Scanner" component={ScannerView}/>
        </Stack.Navigator>
    </NavigationContainer>;
};

export default App;
