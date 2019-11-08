import React, { Component } from 'react';
import { StyleSheet, Image} from 'react-native'
import { Title,Header,Container, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import { NavigationEvents } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
export default class Home extends Component {

    home= () => {
        this.props.navigation.navigate('Home')}
        
  render() {
   // const {navigate}= this.props.navigation;
    return (
      <Container>
        <Header hasSegment style={styles.tema} >
          <Left>
            <Button transparent>
            <Icon name='ios-arrow-back' onPress={this.home}/>
            </Button>
          </Left>
          <Body>
            <Title>Cultivos</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.bodr }>
         
              <Text style={styles.textCenter} >siembre tomates

              </Text>
              


        </Content >
        <Footer >
          <FooterTab>
              
            <Button transparent style={styles.bajo}>
            <Icon name='logo-facebook' size={45} ></Icon>
            </Button>
            <Button transparent style={styles.bajo}>
            <Icon name='logo-google' size={45} ></Icon>
            </Button>
            <Button transparent style={styles.bajo}>
            <Icon name='logo-instagram' size={45} ></Icon>
            </Button>
            
          </FooterTab>
        </Footer>
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
        }, 
        bajo:{
          backgroundColor: '#505050'
        }
  
    
  }
  
  )
  