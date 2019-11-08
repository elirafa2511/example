import React,{Component} from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { CardItem,Card,Input,Title,Header,Container, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon, InputGroup } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { FlatList } from 'react-native'
import ForecastCard from './forecast'

export default class Princ extends Component {
  constructor(props){
    super(props);

    this.state = {
        latitude: 0,
        longitude: 0,
        forecast: [],
        error:''
    }};
    getLocation(){

      // Get the current position of the user
      navigator.geolocation.getCurrentPosition(
      (position) => {
          this.setState(
          (prevState) => ({
              latitude: position.coords.latitude, 
              longitude: position.coords.longitude
              }), () => { this.getWeather(); }
          );
      },
          (error) => this.setState({ forecast: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
  }
  getWeather(){

    // Construct the API url to call
    let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=41fffb3afd6e74dcdc7d05f983b8b2c9';

    // Call the API, and set the state of the weather forecast
    fetch(url)
    .then(response => response.json())
    .then(data => {
        this.setState((prevState, props) => ({
            forecast: data
    }));
    })
}
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
           
            
            <FlatList data={this.state.forecast.list} style={{marginTop:20}} keyExtractor={item => item.dt_text} renderItem={({item}) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />
      
     
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