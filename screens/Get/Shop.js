import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"

const Shop = () => {
    return (
        <>
       
        <View style={styles.ligne1}>
        <Image src= "/Get/marche.jpg" alt="Get"/>
      </View> 

            <View style={styles.containerDiagram}>

                <View style={styles.contain}>

                    <View style={styles.actionIcon}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>Order Groceries </Text>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', }}> and Get delivered </Text>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', }}>  in few minutes</Text>
                    </View>

                    <TouchableOpacity>
                    <View style={styles.carde}>
                        <Text style={{ color: '#4db6ac', }}> Get Started </Text>
                    </View>
                </TouchableOpacity>
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
        marginTop: '25em',
    },
    actionIcon: {
        borderRadius: 100,
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: '-1em',
        alignItems: 'center',
        marginTop: '-5em',
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
        height: 320,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carde: {
        flexDirection: 'row',
        gap: 100,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 'thick',
        borderColor: '#b2dfdb',
        padding: 16,
        shadowColor: 'black',
        marginTop: '3em',
        width: 120,
        height: 19,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ligne1:{
        width:70,
        height:20,
        position:'relative',
        // left:'2%',
        // right:'-2%',
        // top:'4%'
      },
     

})

export default Shop;