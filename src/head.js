import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground} from 'react-native'
import { CardItem,Card,Input,Title,Header,Container, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon, InputGroup } from 'native-base';


export default class Menu extends Component {

        
  render() {
   // const {navigate}= this.props.navigation;
    return (
      <ImageBackground source={require('./../assets/dd.jpg')} style={styles.container}>
       <Text>RS-P</Text>
      </ImageBackground>
    );
  }
}
const styles=StyleSheet.create({
    textCenter :{
      textAlign : 'center',
      width : '100%'
    },
    content:{
      flex:1,
      justifyContent: 'center'
  
    },
    boton:{
        marginEnd:0,
    },
    texcol:{
        backgroundColor: '#a2c04e'
    },
    bodr: {
        backgroundColor: '#d4d5d5'
    },
    logo:{
        width:40,
        height: 40,
        borderRadius: 90 ,
        resizeMode: 'contain'
        },
        headf:{
          flex: 6,
        },
        tema:{
          backgroundColor:'#a2c04e',
          marginTop:24.5,
           height: 80,

        }, 
        bajo:{
          backgroundColor: '#505050'
        },
         content:{
    flex:1,
    justifyContent: 'center'

  }, content:{
    flex:1,
    justifyContent: 'center'

  },
  container:{
    flex:1,
    flexDirection: "column",
    color:'white',
  
  },
  
    
  }
  
  )
  