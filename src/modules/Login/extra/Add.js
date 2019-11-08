import React,{Component} from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { CardItem,Card,Input,Title,Header,Container, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon, InputGroup } from 'native-base';
import { createAppContainer } from 'react-navigation';

export default class Princ extends Component {

 

    Menu= () => {
      this.props.navigation.navigate('Menu')}
   
    render() {
      
      return (
        <Container>
          <Header transparent searchBar rounded style={styles.tema} >
            <Left>
              <Button transparent>
                <Icon name='menu' size={50} onPress={()=>this.props.navigation.toggleDrawer()}/>
              </Button>
            </Left>
            <Body>
              <Title>Inicio</Title>
              <InputGroup>
              <Icon name='ios-search'/>
              <Input placeholder ='Buscar'/>
              </InputGroup>
              
              
            </Body>
            <Right>
            <Button transparent>
                <Text>Buscar</Text>
              </Button>
            </Right>
          </Header>
          <Content style={{backgroundColor:"#d4d5d5"}}>
            <ScrollView>
          </ScrollView>
        </Content>
        <View style={styles.linea}></View>
        </Container>
      );
    }
  }
  const styles=StyleSheet.create({
    body:{
     
    },
    linea:{
      flex: 0.009,
      backgroundColor:"#c0cd9f",
    },
    textCenter :{
      textAlign : 'center',
      width : '100%'
    },
    content:{
      flex:1,
      backgroundColor:"#D9FAFE",
  
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
          marginTop:24.1,
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