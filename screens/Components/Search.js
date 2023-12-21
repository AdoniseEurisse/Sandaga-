
import  { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native"

const Search = () =>{
    return (
       
        <View style={styles.searchSection}>
        
                    <TouchableOpacity  style = { { 
                   color: '#f48fb1',
                  backgroundColor: '#f8bbd0',
                  borderRadius: 8,
                  marginBottom: 20,
                       }}>
                    
                    <Text >Orange</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.droit1}>
                            <Text>Grape</Text>
                        </View>
                    </TouchableOpacity>    

                    <TouchableOpacity>
                        <View style={styles.droit2}>
                        <Text>Pineapple</Text>
                        </View>   
                    </TouchableOpacity>    

                    <TouchableOpacity >
                        <View style={styles.droit3}>
                        <Text>Strawberry</Text> 
                        </View>
                    </TouchableOpacity>  
                    
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
        gap: 70,
        marginLeft: '-4.4em' 
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
   
})

export default Search;