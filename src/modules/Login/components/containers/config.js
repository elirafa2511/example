import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Button, Right, Body, Icon, Title } from 'native-base';
export default class ListHeaderExample extends Component {
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
            <Title>Configuraciones</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>Hora-Fecha</Text>
            </ListItem>
            <ListItem >
              <Text> Ajustar hora y fecha</Text>
            </ListItem>
            <ListItem >
              <Text>Cambiar zona horaria </Text>
            </ListItem>
            <ListItem last>
              <Text>Formato de fecha</Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>ACTION</Text>
            </ListItem>
            <ListItem>
              <Text>Darse de Baja</Text>
            </ListItem>
          </List>
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
        }
    })