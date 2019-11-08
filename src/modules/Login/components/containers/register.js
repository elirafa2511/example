import React, { Component } from 'react';
import { StyleSheet, Alert} from 'react-native'
import { Icon,Title,Right, Left, Input, Item,Container, Header, Button, Content, Card, CardItem, Text, Body } from 'native-base';

export default class Register extends Component {
  saludo=()=>{Alert.alert('Usuario Registrado con Exito')}
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
            <Title>Registro</Title>
          </Body>
          <Right />
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Registro</Text>
       
            </CardItem>
            <CardItem bordered>
              <Body>
              <Item floatingLabel>
              <Icon name='md-person' size={20} ></Icon>
              <Input placeholder='expample: juan@gmail.com'/>
              
            </Item>
            <Item floatingLabel>
              <Icon name='md-person' size={20} ></Icon>
              <Input placeholder='Usuario'/>
              
            </Item>
            <Item floatingLabel last>
            <Icon name='key' size={20} ></Icon>
              <Input placeholder='Contraseña'/>
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button rounded success style={styles.boton }onPress={this.saludo}>
            <Text>Registrarse</Text>
          </Button >
           
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
    marginLeft : '40%'
  },
  tema:{
    backgroundColor:'#a2c04e',
    marginTop:24.5,
    height: 80,
  }
  
  
}

)
