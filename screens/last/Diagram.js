import { Entypo, Fontisto, Octicons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native"

const Diagram = () => {
    return (
        <>

            <View style={styles.containerDiagram}>

                <View style={styles.container}>

                    <View style={styles.card}>

                        <View style={styles.actionIcon2}>

                        </View>

                        <View style={styles.content}>
                            <Text style={styles.tet}>
                                Bitroot
                            </Text>
                            <Text style={styles.T}> $ 1.25 </Text>
                        </View>

                        <View style={styles.actionIcone}>
                            <Fontisto name="shopping-bag" size={20} color="green" />
                        </View>

                    </View>
                </View>

                <View style={styles.card}>

                    {/* <View style={styles.actionIcon}>
                  <Entypo name="heart" size={24} color="pink" />
                  </View> */}

                    <View style={styles.actionIcon1}>

                    </View>
                    <View style={styles.content1}>
                        <Text style={styles.text}>
                            Broccoli
                        </Text>
                        <Text style={styles.Tex}> $ 1.50 </Text>
                    </View>

                    <View style={styles.actionIcone}>
                        <Fontisto name="shopping-bag" size={20} color="green" />
                    </View>

                </View>


                <View style={styles.coeur}>
                    <Entypo name="heart" size={24} color="red" />
                </View>
                
                <View style={styles.coeur2}>
                    <Entypo name="heart" size={24} color="red" />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    content1: {
        marginLeft: '-17em',
        marginTop: '7em',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: '1em',
        marginLeft: '3em',
    },
    Tex: {
        marginTop: '-1em',
        marginLeft: '3em',
    },

    containerDiagram: {
        width: '50%',
        marginTop: 27,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,

        marginTop: '2em',
        marginLeft: '-5em',
    },
    tet: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '9em',
        marginLeft: '1em',
    },
    T: {

        marginTop: '0em',
        marginLeft: '1em',
    },
    card: {
        flexDirection: 'row',
        gap: 30,
        backgroundColor: '#fff',
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
        width: 150,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5em'
    },
    actionIcone: {

        marginTop: '9em',
    },
    searchSection: {
        marginTop: 16,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 24,
        gap: 85,
        marginLeft: '-4.4em'
    },
    actionIcon1: {

        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        marginTop: '4em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '6em',
        height: 2,
        width: 100,
    },
    actionIcon2: {

        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        marginTop: '4em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-9em',
        height: 2,
        width: 100,
    },
    coeur: {
        marginLeft: '-2em',
        marginTop: '-8em',
    },
    coeur2: {
        marginLeft: '-16em',
        marginTop: '-8em',
    }
})


export default Diagram;