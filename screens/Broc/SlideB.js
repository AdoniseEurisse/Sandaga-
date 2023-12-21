import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { AntDesign } from "@expo/vector-icons";


const SlideB = () => {
    return (
        <View style={styles.container}>

            {/* Card */}
            <View style={styles.card}>

                {/* Header */}
                <View style={styles.ima}>
                    {/* <Image
                 style={styles.image}
                 source={require('../Screen/Brocoli.jpg')} /> */}
                </View>
            </View>

            <View style={styles.To}>
                <View style={styles.carde}>
                    <Text style={{ color: '#4db6ac', }}> Vegitables </Text>
                </View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', }}>Broccoli</Text>
                <Text> approx 100 gm</Text>
            </View>

            <View style={styles.PM}>
                <View style={styles.actionIcone1}>
                    <AntDesign name="minussquareo" size={29} color="green" />
                </View>

                <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '0.4em', }}>1</Text>

                <View style={styles.actionIcone2}>
                    <AntDesign name="plussquareo" size={29} color="green" />
                </View>
            </View>

            <View style={styles.actionIcon2}>

            </View>

            <View style={styles.acto}>
                <View style={styles.actionIcon}>

                </View>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Agrifarm Inc</Text>
                    <Text style={{ color: 'gray', }}> F5RJ+FJF, Chairtakol</Text>
                </View>

                <View style={styles.a}>
                    <View style={styles.act}>
                        <AntDesign name="star" size={29} color="yellow" />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '0.4em', color: 'gray', }}>4.9</Text> <Text style={{ marginTop: '0.5em', color: 'gray', }}>(89)</Text>
                </View>
            </View>

            <View style={styles.actionIcon1}>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 'left',
        alignItems: 'center',
        display: 'flex',
        marginLeft: '-4em',

    },
    a:{
        marginLeft: '7em',
        flexDirection: 'row',
    },

    acto: {
        flexDirection: 'row',
        marginTop: '1em',
        marginLeft: '1em',
        jusfifyContent: "space-betweem",
    },
    actionI: {
        marginLeft: '3em',
        marginTop: '3em',
    },

    To: {
        marginLeft: '-10em',
        marginTop: '-2em',
    },
    PM: {
        flexDirection: 'row',
        marginLeft: '22em',
        marginTop: '-3em',
        gap: 1,
    },

    card: {
        backgroundColor: '#b2dfdb',
        borderRadius: 15,
        padding: 5,
        shadowColor: 'black',
        elevation: 14,
        width: 360,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1em',
        marginLeft: '4em',
    },


    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    carde: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 'thick',
        borderColor: '#b2dfdb',
        padding: 11,
        shadowColor: 'black',
        marginTop: '3em',
        width: 100,
        height: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionIcon2: {
        marginTop: '-5em',
        borderRadius: 10,
        backgroundColor: '#fafafa',
        marginTop: '3em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        height: 2,
        borderColor: '#efebe9',
        width: 350,
    },
    actionIcon1: {

        borderRadius: 10,
        backgroundColor: '#fafafa',
        marginTop: '2em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        height: 2,
        borderColor: '#efebe9',
        width: 350,
    },
    actionIcon2: {
        marginTop: '-5em',
        borderRadius: 10,
        backgroundColor: '#fafafa',
        marginTop: '3em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        height: 2,
        borderColor: '#efebe9',
        width: 350,
    },
    actionIcon: {
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        marginLeft: '3em',
        borderWidth: 3,
        borderColor: '#4db6ac',
        width: 40,
        justifyContent: 'center',
    },
});


export default SlideB;
