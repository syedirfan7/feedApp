import { StyleSheet, Platform } from 'react-native';
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  card:{
   // backgroundColor:'yellow',
    height:100,
    width:'90%',
    paddingBottom:10,
    borderBottomColor:'black',
    borderBottomWidth:5 ,
    //textAlign:'left'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); 

export default styles;