import { AntDesign, Entypo } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

const Header = () => {
    return (
        <>

            {/* premiere view */}
            <View style={styles.containerHearder}>
                <View>
                    <TouchableOpacity>
                        <View style={styles.actionIcon}>
                        <AntDesign name="leftsquare" size={30} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>

                        <View style={styles.actionIcone1}>
                            <Entypo name="lock" size={24} color="black" />
                        </View>
                </View>

            </View>
            {/* deuxieme view */}
            <View style={styles.containerHearder1}>

                <View style={styles.alignElement}>
                        <Text style={{fontSize: 24, }}> My </Text>
                        <Text style={{fontSize: 24, }}>  Order</Text>
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

        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBotton: 16,
        fontSize: 100,
        fontWeight: 'bold',

    },
    alignElement: {
        textAlign: 'left',
        flex: 1,
        marginLeft: '-3.20em',
        alignItems: 'center',
        jusfifyContent: "space-betweem",
    },
   
    actionIcon: {
        width: 59,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: '-1em',
        alignItems: 'center'
    },
    actionIcone1: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        gap: 2,
        flexDirection: 'row',
        marginLeft: '7em',
        marginTop: '1em',
    }

})


export default Header;