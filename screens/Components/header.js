//importer un parkage 
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

const Header = () => {
    return (
        <>

            {/* premiere view */}
            <View style={styles.containerHearder}>
                <View>
                    <TouchableOpacity>
                        <View style={styles.actionIcon}>
                            <Entypo name="menu" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>

                        <View style={styles.actionIcone1}>
                            <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />
                        </View>
                </View>

            </View>
            {/* deuxieme view */}
            <View style={styles.containerHearder1}>

                <View style={styles.alignElement}>
                    <View style={styles.contain}>
                        <Text style={styles.Heading}> Discover Seasonal</Text>
                    </View>
                  <Text style={styles.align}>Fruits and Vegitables</Text>
                </View>
            </View>
         
        </>
    );
};

const styles = StyleSheet.create({
    containerHearder: {
        width: '70%',
        marginTop: 24,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,
        gap: 160,
      //  position: 'fixed',
    },
    containerHearder1: {
        width: '50%',
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,
      //  position: 'fixed',
    },
    alignElement: {
        textAlign: 'left',
        flex: 1,
        marginLeft: '-3em',
        fontSize: 45,

    },
    align:{
        fontSize:30,
        marginLeft: '-1.1.1em',
        padding: 10,
        marginTop: '-1em',
    },
    Heading: {
        fontSize: 30,
        // fontWeight: 'bold',
        marginLeft: '-1em',
        padding: 10,

    },
    contain: {
        textAlign: 'left',
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,
    },
    actionIcon: {
        width: 59,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: '-5em',
        alignItems: 'center'
    },
    actionIcone1: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        gap: 2,
        flexDirection: 'row',
        marginLeft: '7em',
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