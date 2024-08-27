import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default {
    checkToken: async () => {
        console.log("entrando Banco")
       await firestore().collection("users")
        .doc("Nd5X5tYZsUkUekOzVObs")
        .update({
          Nome: "Azevedo",
      })
    
        
            },
}