
import React from 'react';
import { Entypo } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';


const Slide = () => {
    return (
        <View style={styles.container}>


            {/* Card */}
            <View style={styles.card}>
                {/* Header */}
                <View style={styles.ima}>
                    {/* <Image
                 style={styles.image}
                 source={require('..\assets\Grape2.jpg')} /> */}
                </View>
                {/* Content */}
                <View style={styles.content}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
                        50% OFF
                    </Text>
                    <Text> On Grocery Combo packs</Text>

                </View>

                <TouchableOpacity>
                    <View style={styles.carde}>
                        <Text style={{ color: '#4db6ac', }}> Get Started </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.but}>
                <Text style={styles.te}> Categories</Text>

                <Text style={styles.tee}>
                    See all
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 'left',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        marginLeft: '2em',
        marginTop: '-1.5em',
    },

    actionIcon: {
        borderRadius: 80,
        backgroundColor: '#fff',
        padding: 7,
        textAlign: 'left',
        marginLeft: '13em',

    },

    card: {
        backgroundColor: '#b2dfdb',
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 340,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

  
    content: {
        alignItems: 'row',
        flex: 1,
        marginTop: '1em',
        marginLeft: '-10em',
        color: 'fb8c00',
    },
   
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    carde: {
        marginLeft: '-10em',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 'thick',
        borderColor: '#b2dfdb',
        padding: 16,
        shadowColor: 'black',
        marginTop: '3em',
        width: 120,
        height: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
    but: {
        flexDirection: 'row',
        marginTop: '11em',
        marginLeft: '-22em',

    },

    te: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '1em',
        marginLeft: '-1em',
    },
    tee: {
        color: 'green',
        marginTop: '2em',
        marginLeft: '15em',
    }
});


export default Slide;
