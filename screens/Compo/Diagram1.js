import { Ionicons, Entypo, AntDesign, Foundation } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native"

const Diagram = () => {
    return (
        <>
            <View style={styles.containerDiagram}>
                <View style={styles.contain}>
                   
                    <Text style={styles.textPorcent} > Nutrition Facts </Text>

                    <View style={styles.count}>
                        <Text>Fiber  3 g</Text>
                      
                        <View style={styles.actionIcon}>
                        <View style={styles.actionIcon1}> </View>
                        </View>
                       
                        
                        <Text style={styles.texte} >Good sugar  12 g</Text>
                       
                        <View style={styles.actionIcon2}>
                        <View style={styles.actionIcon1}>
                        </View>
                        </View>
                        
                    </View>

                    <View style={styles.counte}>
                        <Text>7%</Text>
                        <Text style={styles.text} >5%</Text>
                    </View>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({


    containerDiagram: {
        width: '50%',
        marginTop: '8em',
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: '-14em',
    },

    contain: {
        backgroundColor: '#ffff',
        borderRadius: 50,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 425,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textPorcent: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: '2em',
        marginLeft: '-14em',
    },

    count: {
        jusfifyContent: "space-betweem",
        marginTop: '1em',
        fontSize: 20,
        marginLeft: '-5em',
    },

    counte: {
        jusfifyContent: "space-betweem",
        marginTop: '-6em',
        fontSize: 20,
        marginLeft: '18em',
    },

    text: {
        marginTop: '5em',
    },
    
    texte: {
        marginTop: '3em',
    },
    actionIcon1: {

        borderRadius: 10,
        backgroundColor: '#f8bbd0',
        padding: 1,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        height: 6,
        borderColor: '#f8bbd0',
        width: 100,
        marginTop: '1em',
        marginLeft: '1-em',
        marginTop: '13-em',
    },

    actionIcon: {

        borderRadius: 10,
        backgroundColor: '#bdbdbd',
        marginTop: '1em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        height: 6,
        borderColor: '#efebe9',
        width: 390,
       
       
    },
    actionIcon2: {

        borderRadius: 10,
        backgroundColor: '#bdbdbd',
        marginTop: '1em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        height: 6,
        borderColor: '#efebe9',
        width: 390,
       
       
    }
})

export default Diagram;