import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';
import Quizzes from '../pages/Quizzes';
import Lideranca from '../pages/Quizzes/Lideranca';
import Leader from '../pages/Quizzes/Leader';

import Abaixo from '../pages/Quizzes/Leader/ScreensResults/Abaixo';
import Mediano from '../pages/Quizzes/Leader/ScreensResults/Mediano';
import Bom from '../pages/Quizzes/Leader/ScreensResults/Bom';
import Otimo from '../pages/Quizzes/Leader/ScreensResults/Otimo';

const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}


            drawerStyle={{
                backgroundColor: '#171717'
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#4805f2',
                inactiveBackgroundColor: '#000',
                inactiveTintColor: '#DDD',
                itemStyle: {
                    marginVertical: 5,
                }
            }}
        >
            <AppDrawer.Screen name='Home' component={Home} />
            <AppDrawer.Screen name='Questionários' component={Quizzes} />
            <AppDrawer.Screen name='Perfil' component={Profile} />
        </AppDrawer.Navigator>
    )
}

export default function App2() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={AppRoutes} options={{headerShown:false}} ></AppStack.Screen>
            <AppStack.Screen name="Questionários" component={AppRoutes} options={{headerShown:false}} ></AppStack.Screen>
            <AppStack.Screen name="Perfil" component={AppRoutes} options={{headerShown:false}} ></AppStack.Screen>
            <AppStack.Screen name="Leader" component={Leader} options={{title:'Voltar', headerTintColor:'#05f581', headerStyle:{
                backgroundColor:'#131313'
            },headerTitleStyle:{
                fontWeight:'bold',
            }}}  ></AppStack.Screen>
            <AppStack.Screen name="Lideranca" component={Lideranca} options={{title:'Voltar', headerTintColor:'#05f581', headerStyle:{
                backgroundColor:'#131313'
            },headerTitleStyle:{
                fontWeight:'bold',
            }}} ></AppStack.Screen>
            <AppStack.Screen name="Abaixo" component={Abaixo} options={{title:'Voltar', headerShown:false }} ></AppStack.Screen>
            <AppStack.Screen name="Mediano" component={Mediano} options={{title:'Voltar', headerShown:false}} ></AppStack.Screen>
            <AppStack.Screen name="Bom" component={Bom} options={{title:'Voltar', headerShown:false}} ></AppStack.Screen>
            <AppStack.Screen name="Otimo" component={Otimo} options={{title:'Voltar', headerShown:false}} ></AppStack.Screen>
            <AppStack.Screen name="Perfil2" component={Profile} options={{title:'Voltar', headerShown:false}} ></AppStack.Screen>
        </AppStack.Navigator>

    )
}