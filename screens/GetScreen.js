import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import React from 'react';
import Shop from './Get/Shop';

export default function App() {
    return (
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Shop/>

                </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b2dfdb',
        alignItems: 'center',
        justifyContent: 'center',
        height: 883,
    }
  
});
