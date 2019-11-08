import React, { Component } from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Post from '../../extra/Post';
import Weather from '../../extra/Weather';
import Add from '../../extra/Add';
import Princ from '../../extra/Princ';
import Icon from 'react-native-vector-icons/FontAwesome'


const AppNav = createBottomTabNavigator({
  Princ:{
    screen: Princ, 
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="home" size={23} color={tintColor}/>
      }
    })
  },
  Post:{
    screen: Post,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="edit" size={23} color={tintColor}/>
      }
    })
  },
  Weather:{
    screen: Weather,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="snowflake-o" size={23} color={tintColor}/>
      }
    })
  },
  Add:{
    screen: Add,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="plus" size={23} color={tintColor}/>
      }
    })
  },
}, {
  initialRouteName:'Princ',
  tabBarOptions:{
    activeTintColor:"yellow",
    activeBackgroundColor:"transparent",
    labelStyle:{
       fontSize:12
    },
    /*showlabel:false,*/
    style:{
      backgroundColor:"#505050"
    }
  }
})

export default createAppContainer(AppNav);
