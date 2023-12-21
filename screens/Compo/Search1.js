import { Ionicons } from "@expo/vector-icons";
import  { StyleSheet, View, TextInput } from "react-native"

const Search = () =>{
    return (
        <View style={styles.searchSection}>
           
            <TextInput  style={styles.inputField}/>
                
                 Notre site contient des informations sur les destinations touristiques, 
                 activités disponibles, les hébergements, conseils aux voyageurs, etc.
                  Les fonctionnalités du site sont multiples notamment le système de réservation en ligne, 
                  localisation et présentation des différents restaus par zone.
                  Le langage proprement utilise est le français.  
        </View>
    )
}

const styles = StyleSheet.create({
    searchSection: {
        marginTop: '1em',
        width: '90%',
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 16,
    },
    inputField: {
        alignItems: 'center',
        marginLeft: '-11em',
    },
})

export default Search;