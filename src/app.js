import React from 'react'
import {createAppContainer} from 'react-navigation'

import { createDrawerNavigator } from 'react-navigation-drawer';

//createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
import Login from './modules/Login/components/containers/login'
import Register from './modules/Login/components/containers/register'
import Home from './modules/Login/components/containers/home'
import Ajuste from './modules/Login/components/containers/config'
import Cultivos from './modules/Login/components/containers/quienes'
import { Dimensions} from 'react-native'


const WIDTH =Dimensions.get("window").width;
const Drawerconfig={
  drawerWidth:WIDTH*0.50,
}
const DrawerNavigator=createDrawerNavigator({
  

  Home:{
    screen:Home,
    
    
  
  },
  Cultivos:{
    screen: Cultivos
  },
  Login:{
    screen: Login,
  },
  Register:{
    screen: Register
  },
  Ajuste: {
    screen: Ajuste
  }
 },
 Drawerconfig
);
export default createAppContainer(DrawerNavigator)
