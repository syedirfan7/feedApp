import { StyleSheet, Platform } from 'react-native';
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'azure',
  },
  label:{
color:'black'
  },
  card:{
    backgroundColor:'floralwhite',
    height:325,
    width:'90%',
    paddingBottom:10,
    borderBottomColor:'grey',
    borderBottomWidth:1 ,
    //textAlign:'left'
  },
  title:{
    textAlign:'center',
    color:'black'
  },
  titleBar:{
    backgroundColor:'azure'
  },
  data:{
    paddingBottom:120,
    backgroundColor:'azure'
  },
  description:{
  paddingTop:10
  }
}); 

export default styles;