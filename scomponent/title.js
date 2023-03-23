import { StyleSheet, View, Text } from "react-native"
import { Colors } from "../sconstant/color"

export default function Title({children}) {
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
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.accent,
        //ios property
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    text: {
        textTransform:'uppercase', 
        fontWeight: '700' 
    }
})