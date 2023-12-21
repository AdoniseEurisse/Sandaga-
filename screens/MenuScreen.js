import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Header2 from "./Page3/Header2";
import React from 'react';
import Body from './Page3/Body';
import Pied from './Page3/Pied';


export default function App() {
    return (
      
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Header2 />
                    <Body />
                    <Pied />

                </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 883,
       
       
    },
});