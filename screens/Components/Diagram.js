import { Entypo, Fontisto, Octicons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native"

const Diagram = () => {
    return (
        <>
            <View style={styles.containerDiagram}>

                <View style={styles.container}>

                    <View style={styles.card}>
                        <View style={styles.actionIcone}>
                            <Fontisto name="shopping-store" size={54} color="Black" />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.text}>
                                Xenter Shop
                            </Text>
                            <Text style={styles.arro}>
                                2356 Toltrican Street
                            </Text>
                            <Text style={styles.Text}> 9AM - 7PM </Text>
                        </View>

                    </View>
                </View>

                    <View style={styles.card}>
                        <View style={styles.actionIcone}>
                            <Entypo name="shop" size={54} color="Black" />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.text}>
                                Xenter Shop
                            </Text>
                            <Text style={styles.arro}> 2356 Toltrican Street </Text>
                            <Text style={styles.Text}> 9AM - 7PM </Text>
                        </View>
                    </View>
        
            </View>
            {/* <View style={styles.searchSection}>

                <Fontisto name="Home" size={24} color="Black" />

                <FontAwesome name="Search" size={24} color="Black" />

                <Entypo name="Archive" size={24} color="Black" />
                
                <Octicons name="Personne" size={24} color="gray" />

            </View> */}

        </>
    );
};

const styles = StyleSheet.create({


    containerDiagram: {
        width: '50%',
        marginTop: 27,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,
        gap: 50,
        marginTop: '4em',
        marginLeft: '-19em',
    },
    card: {
        flexDirection: 'row',
        gap: 80,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 'thick',
        borderColor: '#f8bbd0',
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
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionIcon: {
        borderRadius: 80,
        padding: 7,
        backgroundColor: '#f8bbd0',
        textAlign: 'left',
        marginLeft: '9em',
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
})

export default Diagram;