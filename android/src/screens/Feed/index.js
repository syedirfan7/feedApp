import React, { Component } from 'react';
import {Text,  View,  ScrollView,  RefreshControl, Image, FlatList } from 'react-native';
import styles from './style';
import xmldom from 'xmldom';

window.DOMParser = require('xmldom').DOMParser;
export default class App extends Component {
  constructor(props){
        super(props);
        this.state = {
           data:[],
      };
    }
  getNews= async()=> {
  var url = "http://pulse.zerodha.com/feed.php"
  await fetch(url)
  .then((response) => response.text())
  .then((responseText) => {
    //console.log(responseText)
    const parser = new DOMParser();
   const xmlDoc = parser.parseFromString(responseText);
   const doc = new DOMParser().parseFromString(responseText, "text/xml");
   var y=xmlDoc.getElementsByTagName("channel");
   var x=xmlDoc.getElementsByTagName("item");
 this.setState({
data:x,
});
  //  console.log(this.state.data[0]);//to parse the string
 })
  .catch((error) => {
    console.log('Error fetching the feed: ', error);
  });
}
componentDidMount(){
this.getNews();
}
renderItem = ({ item }) => {
  return (
      <View style={styles.container} >
      {
            !((item.childNodes[5].firstChild.nodeValue.indexOf('<a')>-1)||(item.childNodes[5].firstChild.nodeValue.indexOf('<img')>-1)) &&
               <View style={styles.card}>
                 <Image style={{width: '100%', height: 200}} source={{uri: 'http://www.colours.co.tz/wp-content/uploads/2014/04/placeholder4.png'}} />
              <Text style={styles.label}>{item.childNodes[1].firstChild.nodeValue}</Text>
              <Text  ellipsizeMode='tail' numberOfLines={4} style={styles.description}>{item.childNodes[5].firstChild.nodeValue} </Text>  
              </View>    
          }
      </View>
          )
  }
  render() {
      const {data} = this.state;
    return (
     <View style={styles.screen}>
         <View style={styles.titleBar}> 
          
          <Text style={styles.title}>Pulse by Zerodha</Text>
          <Text style={styles.caption} >Latest financial and market news from all major Indian news sources aggregated in one place</Text>    
    </View>
    <View style={styles.data}>
       <ScrollView > 
              <FlatList data={ data }
                renderItem={ this.renderItem }
                keyExtractor={(item, index) => index}
                />
        </ScrollView> 
        </View>
      </View>
    );
  }
}

