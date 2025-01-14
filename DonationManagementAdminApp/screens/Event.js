import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Text } from "react-native";
import { Paragraph } from 'react-native-paper';


const localimage = require("../assets/eventback.png");

const Event = (props) => {



//   const onPresscomplete = () => {
//     props.navigation.navigate('CompleteEvent');    
//   };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      <Paragraph style={styles.eventpara}>We took a collection of school children's {"\n"} art and sold 
    it to evaluate the children's skills, and we were able to complete our goal very
    successfully. Moreover,{"\n"} a large number of people participated{"\n"} in this and it
     was a very good event.</Paragraph>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
eventpara:{
    bottom: -140,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: `black`
}
  
 
});

export default Event;