import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header1 from "./Compo/header1";
import Search1 from './Compo/Search1';
import Slide1 from './Compo/Slide1';
import Diagram1 from './Compo/Diagram1';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header1 />
      <Search1 />
      <Slide1 />
      <Diagram1 style="Bas"/>
      {/* <Baton /> */}
     

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff0b2',
    alignItems: 'center',
    justifyContent: 'center',
 
  },

Bas: {
  width: '100%',
  height: 200,
  backgroundColor: '#ffff'
}
});











// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const ProfileScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Mon profil</Text>
//             <Image
//                 style={styles.image}
//                 source={require('../assets/52.jpg')}
//             />
//             <Text style={styles.text}>Ceci est mon profil.</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     title: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     image: {
//         width: 200,
//         height: 200,
//         margin: 15,
//     },
//     text: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

// export default ProfileScreen;
