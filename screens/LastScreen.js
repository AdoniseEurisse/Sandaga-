import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React from 'react';
import Header from "./last/header";
import Search from './last/Search';
import Slide from './last/Slide';
import Diagram from './last/Diagram';



export default function App() {
    return (
      
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Header />
                    <Search />
                    <Slide />
                    <Diagram />

                </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        height: 883,
       
       
    },
});