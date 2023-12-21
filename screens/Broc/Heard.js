import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity, } from 'react-native';



const Heard= () => {
    return (
       
            <View style={styles.containerHearder}>
            
                    <TouchableOpacity>
                        <View style={styles.actionIcon}>
                            <AntDesign name="left" size={20} color="gray" />
                        </View>

                        <View style={styles.actionIcone1}>
                            <AntDesign name="upload" size={20} color="gray" />
                        </View>
                        <View style={styles.actionIcone2}>
                            <AntDesign name="exclamationcircleo" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                
            </View>
    );
};

const styles = StyleSheet.create({

    containerHearder: {
        flexDirection: 'row',
       marginLeft: '-1em',
        marginTop: '-14em',
        
    },
    actionIcone1: {
        marginTop: '-1.5em',
        marginLeft: '18em',
        borderRadius: 10,
       
    },
    actionIcone2: {
        marginTop: '-1.4em',
        marginLeft: '20em',
        borderRadius: 10,
    },
    actionIcone: {
        marginTop: '-10em',
        borderRadius: 10,
    },

});


export default Heard;
