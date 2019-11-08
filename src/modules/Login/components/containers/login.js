import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import {FontAwesome, Entypo} from '@expo/vector-icons'
import { Icon, Input, Item,Container, Header, Button, Content, Card, CardItem, Text, Body,Left,Title, Right } from 'native-base';
export default class Login extends Component {
register= () => {
  this.props.navigation.navigate('Register')}
  home= () => {
    this.props.navigation.navigate('Home')}
  render() {
    return (
      <Container>
         <Header style={styles.tema}>
        <Left>
            <Button transparent>
              <Icon name='ios-arrow-back' onPress={this.home}/>
            </Button>
          </Left>
          <Body>
            <Title>Iniciar Sesión</Title>
          </Body>
          <Right />
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Inicio de sesion</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Item floatingLabel>
              <Icon name='md-person' size={20} ></Icon>
              <Input placeholder='Nombre de Usuario'/>
              
            </Item>
            <Item floatingLabel last>
            <Icon active name='lock' size={20} ></Icon>
              <Input placeholder='Contraseña'/>
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button rounded danger style={styles.boton} onPress={this.register}>
            <Text>Registrarse</Text>
          </Button>
            <Button rounded success style={styles.boton}>
              <Text> Entrar </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
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
    marginLeft : '12%'
  },
  tema:{
    backgroundColor:'#a2c04e',
    marginTop:24.5,
    height: 80,
    
  }

  
}

)
