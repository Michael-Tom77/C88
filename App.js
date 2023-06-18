import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/drawerNavigator.js';

import LoginScreen from './screens/login.js';
import RegisterScreen from './screens/register.js';

import firebase from 'firebase';
import { firebaseConfig } from './config.js';
if(!firebaseConfig.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

const StackNavigator = ()=>{
  return(
     <Stack.Navigator initialRouteName='Login' screenOptions = {{headerShown: false}}>
      <Stack.Screen name = 'Login' component = {LoginScreen}/>
      <Stack.Screen name = 'Register' component = {RegisterScreen}/>
      <Stack.Screen name = 'Dashboard' component = {DrawerNavigator}/>
     </Stack.Navigator>
  )
}