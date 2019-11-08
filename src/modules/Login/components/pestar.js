import React from 'react'
import {createAppContainer, DrawerNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './modules/Login/containers/login'
import Register from './modules/Login/containers/register'
import Home from './modules/Login/containers/home'
import {  Text} from 'react-native'
import {  Button, Left, Right, Body, Icon } from 'native-base';



const Pestar = DrawerNavigator({
  cosa1 : {
    screen : Pest,
   // navigationOptions :({navigate})=>( { 
      
      title : 'RS-P',
      
      headerStyle: {backgroundColor: 'red'},
      headerLeft:    <Text>  <Icon name= "md-menu" size ={35} onPress={this.Draw}/>
    </Text>,
    headerRight : <Text> <Icon name= "search" size ={35}/>
    </Text>
   
  
    },
    cosa2 :{
    screen : Login,
    }
})
    export default createAppContainer(LoginNavigator)
    
