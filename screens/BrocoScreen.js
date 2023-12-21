import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import React from 'react';
import SlideB from './Broc/SlideB';
import Heard from './Broc/Heard';
import End from './Broc/End';


export default function App() {
    return (
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Heard />
                    <SlideB />
                    <End />
                  

                </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 883,
    }
  
});
