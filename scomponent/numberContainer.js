import { StyleSheet, TextInput, Text, View } from "react-native";
import { Colors } from "../sconstant/color";

export default function NumberContainer({children}) {
 return(
    <View style={styles.inputContainer}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
 )
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 2,
        alignSelf: 'center',
        height: 60,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary500,
        //ios property
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    text: {
        textTransform:'uppercase', 
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})