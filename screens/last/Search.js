import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"

const Search = () => {
    return (

        <View style={styles.searchSection}>


            <TouchableOpacity >
            <View style={styles.carde}>
                        <Text style={{ color: '#4db6ac', }}/>
                    </View>
                <Text >Vegetablews</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.carde}>
                        <Text style={{ color: '#4db6ac', }}/>
                    </View>
                <View style={styles.droit1}>
                    <Text>Dairies</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.carde}>
                        <Text style={{ color: '#4db6ac', }}/>
                    </View>
                <View style={styles.droit2}>
                    <Text>Meats</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity >
            <View style={styles.carde}>
                        <Text style={{ color: '#4db6ac', }}/>
                    </View>
                <View style={styles.droit3}>
                    <Text>Fish</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.but}>
                <Text style={styles.te}> Deals</Text>

                <Text style={styles.tee}>
                    See all
                </Text>
            </View>

        </View>
     
    )
}

const styles = StyleSheet.create({
    searchSection: {
        marginTop: 16,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 24,
        gap: 48,
        marginLeft: '-2em',
        marginTop: '5em'
    },

    droit1: {

        fontSize: 30,
        fontWeight: 'bold',


    },
    droit2: {

        fontSize: 30,
        fontWeight: 'bold',


    },
    droit3: {

        fontSize: 30,
        fontWeight: 'bold',


    },

    but: {
        flexDirection: 'row',
        marginTop: '1em',
        marginLeft: '-12em',

    },

    te: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '1em',
        marginLeft: '-10em',
    },
    tee: {
        color: 'green',
        marginTop: '2em',
        marginLeft: '15em',
    },
    carde: {
        marginLeft: '0em',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 'thick',
        borderColor: '#b2dfdb',
        padding: 16,
        shadowColor: 'black',
        marginTop: '-2.5em',
        width: 12,
        height: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Search;