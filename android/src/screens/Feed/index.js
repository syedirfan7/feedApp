/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text,  View,  ScrollView,  RefreshControl,  FlatList  } from 'react-native';
import styles from './style';
import xmldom from 'xmldom';

//import XMLParser  from 'react-xml-parser';
// import xmlParser from 'xml2js'

window.DOMParser = require('xmldom').DOMParser;
export default class App extends Component {
  constructor(props){
        super(props);
        this.state = {
           data:[]
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
  var x=xmlDoc.getElementsByTagName("item");
 this.setState({
data:x
})
  //console.log("XmlTest.exampleParse " + x);
  console.log(this.state.data);
   // console.log("XmlTest.exampleParse " + x.childNodes[0]);
   console.log(this.state.data[2].childNodes[5].firstChild.nodeValue);//to parse the string
//var xml = new XMLParser().parseFromString(responseText);  
//var xml2=new XMLParser().toString(responseText);  // Assume xmlText contains the example XML
//console.log(xml.children[0].children);
//console.log(xml.getElementsByTagName('item'));
//console.log(xml2);
    var objs = []
    // for (var i = 0; i < items.length; i++) {
    //   objs.push({
    //     title: items[i].childNodes[0]
    //   })
    // }
    console.log("yay! made it here")
    // console.log("objs length: ", objs.length)
    // console.log("objs: ", objs[0])
  })
  .catch((error) => {
    console.log('Error fetching the feed: ', error);
  });
}
componentDidMount(){
this.getNews();
}
renderItem = ({ item }) => {
    
   // const { id, tid, name, description, imageUrl } = item;
  //console.log(item[0]);
    return (
      <View style={styles.container} >
       
          {
            item.childNodes[5].firstChild.nodeValue.indexOf('<a')>-1 &&
               <View style={styles.card}>
              <Text >{item.childNodes[1].firstChild.nodeValue}</Text>
              <Text>{item.childNodes[5].firstChild.nodeValue} </Text>  
              </View>    
          }
      
      </View>
          )
  }
  render() {
      const { data} = this.state;

    return (
     <View style={styles.screen}>
        {/* <Text>Hello</Text>  */}
        <ScrollView style={styles.data}> 
              <FlatList data={ data }
              //renderItem={({item}) => <Text>{item.childNodes[5].firstChild.nodeValue} </Text>}
                renderItem={ this.renderItem }
                keyExtractor={(item, index) => index}
                /> 
                {/* <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.childNodes[5].firstChild.nodeValue} </Text>}
/> */}
                 </ScrollView> 
                </View>
    );
  }
}

