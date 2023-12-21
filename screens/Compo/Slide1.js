
import React from 'react';
import { Entypo } from "@expo/vector-icons";
import { View, Text, StyleSheet}
    from 'react-native';

const Slide = () => {
    return (
        <View style={styles.container}>

            <View style={styles.actionIcon1}>    
                <Text style={styles.te}>Find   Nearest   Store</Text>
            </View>

            <View style={styles.actionIcon}>
            <Entypo style={styles.tee} name="heart" size={29} color="pink" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
         marginTop: '4em',
         marginLeft: '-14em',
    },
    actionIcon: {
        borderRadius: 20,
        padding: 10,
        textAlign: 'center',
        marginLeft: '-12em',
        borderWidth: 3,
        borderColor: '#f8bbd0',
       width: 60, 
       justifyContent: 'center',
    },
    actionIcon1: {
        
        borderRadius: 10,
        backgroundColor: '#f8bbd0',
        padding: 10,
        display: 'flex',
       justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        borderWidth: 'thick',
        borderColor: '#f8bbd0',
        width: 200, 
    },
    te: {
        color: '#fff0b2',
        justifyContent: 'center',
        textAlign: 'center',
    },

    tee: {
        textAlign: 'center', 
    }
});

export default Slide;
