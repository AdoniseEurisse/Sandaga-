import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

const   Pied = () => {
    return (
        <>
            <View style={styles.containerDiagram}>
                <View style={styles.contain}>
                   
                        <View style={styles.actionIcon2}>
                       
                        </View>
                        
                </View>
            </View>

            
            <View style={styles.containerHearder}>
                <View style={styles.actionIcon}>
              <Text style={{fontSize: 24, }}>Total Price </Text>
                </View>
                <View>

                    <View style={styles.actionIcone1}>
                    <Text style={{fontSize: 24, }}>$50 </Text>  
                    </View>
                </View>

            </View>
           
            <TouchableOpacity>
            <View style={styles.carde}>  
            <Text style={{  color: '#fff', }}> Payment </Text>  
          </View>
          </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({

    actionIcon2: {

        borderRadius: 10,
        backgroundColor: '#fafafa',
        marginTop: '1em',
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: '-5em',
        height: 2,
        borderColor: '#efebe9',
        width: 450,   
    },
    containerHearder: {
        marginTop: 24,
        flexDirection: "row",
        alignItems: 'center',
        jusfifyContent: "space-betweem",
        paddingHorizontal: 24,
        paddingBotton: 16,
        gap: 90,  
        fontSize: 15,
        fontWeight: 'bold',
        //  position: 'fixed',
    },

    actionIcon: {
        flexDirection: "row",
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
    },
    carde: {
        backgroundColor: 'pink',
        borderRadius: 7,
        padding: 16,
        width: 160,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '8em',
        marginTop: '2em',
    },
})

export default Pied;