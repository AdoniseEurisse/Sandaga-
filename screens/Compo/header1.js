//importer un parkage 
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

const Header = () => {
    return (
        <>
            {/* premiere view */}
            <View style={styles.containerHearder}>
                <View>
                    <TouchableOpacity>
                        <View style={styles.actionIcon}>
                            <AntDesign name="leftsquare" size={30} color="pink" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>

                    <TouchableOpacity>
                        <View style={styles.actionIcone1}>
                            <Entypo name="share" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tee}> Product  Detail </Text>
            </View>

            {/* deuxieme view */}
            <View style={styles.containerHearder1}>

                <View style={styles.alignElement}>
                    <View style={styles.contain}>
                        <Text style={styles.Heading}> Juicy Orange </Text>
                    </View>
                    <Text style={styles.the}> Sweet and Juicy </Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerHearder: {
        width: '70%',
        marginTop: '3em',
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,
        gap: 140,
    },
    tee: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-25.5em', 
        fontSize: 15,
        fontWeight: 'bold',
    },
    the: {
        marginLeft: '2em',
        color: '#f8bbd0',
      
    },
    containerHearder1: {
        width: '50%',
        marginTop: 24,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,

    },
    alignElement: {
        textAlign: 'left',
        flex: 1,
        marginLeft: '-8em',

    },
    contain: {
        textAlign: 'left',
        marginTop: 24,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,
    },
    actionIcon: {
        borderRadius: 100,
        padding: 10,
        marginLeft: '-5em',
        alignItems: 'center'
    },
    actionIcone1: {
        padding: 10,
        gap: 2,
        flexDirection: 'row',
        marginTop: '1em',
        marginLeft: '7em',
    },
    actionIconePlus: {
        borderRadius: 80,
        backgroundColor: '#000',
        padding: 10,
        color: '#fff',
    },
    Heading: {
        fontSize: 29,
        fontWeight: 'bold',
        marginLeft: '1-em',
        padding: 0,
        marginTop: '-1em',

    },
    textPorcent: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 2,
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 4,

    },

})


export default Header;