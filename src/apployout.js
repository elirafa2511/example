import React, { Component} from 'react';
import { StyleSheet, Text, ImageBackground,View, Button,Image, Alert, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { requireNativeViewManager } from '@unimodules/core';

class Crisprod extends Component{
render(){
    return(
        <View style={styles.body}>
            <text>holaaaaaaaaaaaa</text>

        </View>
    )
}

}










const styles=StyleSheet.create({
    container:{
      flex:1,
      flexDirection: "column",
      color:'white',
    
    },
    header:{
      flex: 0.2,
      flexDirection: 'column',
      marginTop: 24.2,
      backgroundColor:'gray',
    },
    headerleft:{
      flex: 1,
    },
    headerright:{
      flex: 1,
      alignItems:'flex-end',
    },
    body:{
      flex: 0.9,
      alignItems: 'center',
    },
    logo:{
      width:70,
      height: 100,
      borderRadius: 200 ,
      resizeMode: 'contain'
      },
      barrainferior:{
        flex: 0.17,
        flexDirection: 'row',
        backgroundColor: '#c0cd9f',
        marginBottom: 3,
      },
      inferiorleft:{
        flex: 1,
        marginRight:10 ,
        marginLeft: 10,
        marginTop: -30,
      },
      inferiorright:{
        flex: 1,
        marginLeft: 50,
      },
      inferiorcenter:{
        flex: 1,
        marginLeft: 10,
        marginTop: 15,
      },
      textcolor:{
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
      },
      textcolord:{
        marginTop: 50,
        color: 'black',
        fontWeight: 'bold',
      },
  })
  export default Crisprod 