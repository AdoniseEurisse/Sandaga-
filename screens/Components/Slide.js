
import React from 'react';
import {  Entypo } from "@expo/vector-icons";
import { View, Text, StyleSheet, Alert, Image} from 'react-native';
import { Button } from 'react-native-web';


const  Slide = () => {
    return (
        <View style={styles.container}>

            {/* Card */}
            <View style={styles.card}>
                  
                <View style={styles.actionIcon}>
                    <Entypo name="heart" size={24} color="pink" />
                </View>

                {/* Header */}
                <View style={styles.ima}>
                {/* <Image
                 style={styles.image}
                 source={require('..\assets\Grape2.jpg')} /> */}
                 </View>
                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Orange
                    </Text>
                    <Text style={styles.arro}>
                          $10
                    </Text>
                    <Text style={styles.Text}> Nearby  Shop </Text>
                </View>
                <Button 
                  title="ADO"
                  color="#ef6c00"
                  onPress={() => Alert.alert('left')}
                   />
            </View>

             {/* Card */}
             <View style={styles.carde}>
                  
                  <View style={styles.actionIcon}>
                  <Entypo name="heart" size={24} color="pink" />
                  </View>
  
                 
                  <View style={styles.header}>
                    {/* <Image source={require('./assets/grape.jpg')} style={{width:40,height:40,}}> </Image>  */}
                  </View>
  
                 
                  <View style={styles.contente}>
                      <Text style={styles.text}>
                          Grape
                      </Text>
                      <Text style={styles.arro}>
                          $10
                    </Text>
                  </View>
                  <Button 
                  title="ADO"
                  color="#3f51b5"
                  onPress={() => Alert.alert('left')}
                   />
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
    },
    
    actionIcon: {
        borderRadius: 80,
        backgroundColor: '#fff',
        padding: 7,
        textAlign: 'left',
        marginLeft: '13em',

    },
    arro: {
        textAlign: 'right',
        marginLeft: '26em',
        marginTop: '-1.3em',
   },
   title: {
    backgroundColor: '#ffff',
    borderRadius: 500,
   marginVertical: 20,
   },
    
    card: {
        backgroundColor: '#ffe0b2',
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
        width: 259,
        height: 290,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carde: {
        backgroundColor: '#c5cae9',
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
        width: 259,
        height: 290,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '24'
    },
    subtitle: {
        fontSize: 24,
        color: '#333',
        marginTop: 10,
    },
    content: {
        alignItems: 'row',
        flex: 1,
        marginTop: '9em',
        marginLeft: '-11em',
        color: 'fb8c00',
    },
    contente: {
        alignItems: 'row',
        flex: 1,
        marginTop: '6em',
        marginLeft: '-11em',
    },
    
    Text: {
        fontWeight: 'bold',
        fontSize: 15,
        alignItems: 'row',
        flex: 1,
        marginTop: '6em',
        marginLeft: '10em',
    },
    
    
    text: {
        fontSize: 17,
        color: '#444444',
        textAlign: 'center',
        gap: '5',
    },
    image: {
                width: 200,
                 height: 200,
                 margin: 15,
             },
});


export default Slide;
