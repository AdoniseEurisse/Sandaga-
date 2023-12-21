import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native"
import React from 'react';
import { SimpleLineIcons } from "@expo/vector-icons";

const End = () => {
    return (


        <View style={styles.searchSection}>


            <TextInput style={styles.inputField} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: '1em' }}>Description</Text>
            Broccoli is an edible green plant in the cabbage famili whose large
            flowering head, stalk and small associated leaves are<TouchableOpacity><Text style={styles.lire}> Read more.</Text>
            </TouchableOpacity>

            
                <View style={styles.container}>
                
                    <View style={styles.actionIcon1}>
                        <Text style={styles.te}>Add to cart $1.50</Text>
                    </View>

                    <View style={styles.actionIcon}>
                        <SimpleLineIcons style={styles.tee} name="handbag" size={24} color="green" />
                    </View>
                    
                </View>
              
        </View>

    );
};

const styles = StyleSheet.create({
    searchSection: {
        marginTop: '1em',
        width: '90%',
        height: 50,

        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 16,
    },
    lire: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        flexDirection: 'row',
        marginLeft: '4em',
        marginTop: '-1.3em',
    },
    inputField: {
        alignItems: 'center',
        marginLeft: '-11em',
        marginTop: '7em',
        gap: 1,

    },
    container: {

        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1em',
        marginLeft: '7em',
    },
    actionIcon: {
        borderRadius: 20,
        padding: 10,
        textAlign: 'center',
        marginLeft: '-12em',
        borderWidth: 3,
        borderColor: '#4db6ac',
        width: 60,
        justifyContent: 'center',
    },
    actionIcon1: {
        Color: 'green',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        borderWidth: 3,
        borderColor: '#4db6ac',
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
})

export default End;
