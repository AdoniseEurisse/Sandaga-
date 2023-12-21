import {  AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

const Body = () => {
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
                            <AntDesign name="lock1" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tee}> Orange </Text>
                <Text style={styles.te}> 1 * </Text>
                <Text style={styles.ta}> $10 </Text>
            </View>

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
                            <AntDesign name="lock1" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tee1}> Strawberry </Text>
                <Text style={styles.te1}> 1 * </Text>
                <Text style={styles.ta1}> $12 </Text>
            </View>
           
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
                            <AntDesign name="lock1" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tee1}> Pineapple </Text>
                <Text style={styles.te2}> 1 * </Text>
                <Text style={styles.ta2}> $20 </Text>
            </View>

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
                            <AntDesign name="lock1" size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.tee}> Grape </Text>
                <Text style={styles.te}> 1 * </Text>
                <Text style={styles.ta3}> $13 </Text>
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
        marginLeft: '4em', 
    },
    tee: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-22em', 
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '-2em',
    },
    te: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-16em', 
        fontSize: 15,
        fontWeight: 'bold',
    },

    ta: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-8.5em', 
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '1em',
    },

    tee1: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-22em', 
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '-2em',
    },
    te1: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-18.4em', 
        fontSize: 15,
        fontWeight: 'bold',
    },
    te2: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-18em', 
        fontSize: 15,
        fontWeight: 'bold',
    },

    ta1: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-8em', 
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '1em',
    },
    ta2: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-7.9em', 
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '1em',
    },
    ta3: {
        alignItems: 'center',
        paddingBotton: 16,
        marginLeft: '-7.9em', 
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: '1em',
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
        backgroundColor: '#bdbdbd',
        borderRadius: 10,
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


export default Body;