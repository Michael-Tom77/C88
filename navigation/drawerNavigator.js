
import * as React from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import Profile from '../screens/profile.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './stackNavigator';
import LogOut from '../screens/logOutScreen.js'

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
 return(
    <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name = 'Home' component = {StackNavigator}/>
        <Drawer.Screen name = 'Profile' component = {Profile}/>
        <Drawer.Screen name = 'LogOut' component = {LogOut}/>
    </Drawer.Navigator>
 )
}
export default DrawerNavigator;