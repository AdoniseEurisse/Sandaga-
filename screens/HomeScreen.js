import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import Header from "./Components/header";
import Search from './Components/Search';
import Slide from './Components/Slide';
import Diagram from './Components/Diagram';
import React from 'react';

export default function App() {
    return (

           <ScrollView style={styles.bare} horizontal={true} >

                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Header />
                    <Search />
                    <Slide />
                    <Diagram />

                </View>
           </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 100,
        // width: 500,
        // height: 799,
        // borderRadius: 80,
        // borderWidth: 'thick',
    },
    bare: {
        marginHorizontal: 1,
    },
    containe: {
        flex: 1,
paddingTop: StatusBar.currentHeight,
    }
});





// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const HomeScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Bienvenue à la maison !</Text>
//             <Image
//                 style={styles.image}
//                 source={require('../assets/68.jpg')}
//             />
//             <Text style={styles.text}>Ceci est une démonstration de React Native.</Text>
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

// export default HomeScreen;