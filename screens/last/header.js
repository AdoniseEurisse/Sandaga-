//importer un parkage 
import { MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native"

const Header = () => {
    return (
        <>

            {/* premiere view */}
            <View style={styles.containerHearder}>
                <View>
                    <Text>Your Location</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}>3892 Olen Thomas Drive, NY</Text>
                    <TouchableOpacity>
                        <View style={styles.actionIcon}>
                            <AntDesign name="down" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>

                        <View style={styles.actionIcone1}>
                            <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />
                            <MaterialIcons style={styles.mixe} name="keyboard-voice" size={20} color='gray' />
                        </View>

                </View>

            </View>
            {/* deuxieme view */}
            <View style={styles.searchSection}>
            <Ionicons style={styles.searchIcon} name="ios-search" size={20} color='gray' />
            <TextInput 
                style={styles.inputField}
                placeholder='Search foods,groceries'
            />
             <MaterialIcons style={styles.voice} name="keyboard-voice" size={20} color='gray' />
        
            </View>
          
            <View style={styles.but}>
                <Text style={styles.te}> Categories</Text>

                <Text style={styles.tee}>
                    See all
                </Text>
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
        gap: 1,
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
        marginLeft: '13em',
        marginTop: '-1.5em',
        alignItems: 'center'
    },
    actionIcone1: {
       
        flexDirection: 'row',
        marginLeft: '7em',
        marginTop: '1em',
    },
   
    textPorcent: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 2,
        backgroundColor: '#fff',
        borderRadius: 24,
        padding: 4,

    },
    searchSection: {
        marginTop: 16,
        width: '65%',
        height: 35,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: '1em',
    },
    searchIcon: {
        padding: 5,
        justifyContent: "center",
    },
    voice: {
        marginLeft: '-2em',
        marginTop: '0.3em',
    },
    inputField: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
    },

    mixe: {
        borderRadius: 80,
        padding: 7,
        textAlign: 'left',
        marginLeft: '13em',
        backgroundColor: 'green',
        marginLeft: '2em',
    },
    but: {
        flexDirection: 'row',
        marginTop: '0em',
        marginLeft: '3em',

    },

    te: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '1em',
        marginLeft: '-1em',
    },
    tee: {
        color: 'green',
        marginTop: '2em',
        marginLeft: '12em',
    }

})

 
export default Header;