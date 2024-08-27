import React, { useRef, useState,  useContext, useEffect } from "react";
//import { NavigationContainer } from '@react-navigation/native';
//import UserContextProvider from './src/contexts/UserContext';
//import  MainStack from './src/stacks/MainStack';
import Api from './src/Api';
import { View, Text } from "react-native";
//import { Text } from "react-native-svg";
//import { AppState} from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
// import SuperAlert from "react-native-super-alert";
// import PushNotification from "react-native-push-notification";

export default () => {
  
  
const [Ocorre, setOcorre] = useState("");
const [QuantV, setQuantV] = useState(null);
const [QuantM, setQuantM] = useState(0);
const [VerVizu, setVerVizu] = useState(false)
const [QM, setQM] = useState(0)
const [QV, setQV] = useState(0)
const [ChatAndo, setChatAndo] = useState(false);










useEffect(() => {
  pegarMsg()
 }, [])



  
 
   


  

   


 




    const pegarMsg = ()=>{
      Api.checkToken();
  }

 
return (
  <View>
    <Text>Massa</Text>
  </View>
  // <UserContextProvider>

  //       <NavigationContainer>
  //           <SuperAlert customStyle={customStyle} />
  //           <MainStack />

  //       </NavigationContainer>  

  // </UserContextProvider>
   

);
}
