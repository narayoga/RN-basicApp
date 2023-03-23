import { View, StyleSheet } from "react-native"
import { Colors } from "../sconstant/color"

export default function Card({children, style}){
 return(
    <View style={[styles.card, style]}>
        {children}
    </View>
 )
};

const styles = StyleSheet.create({
    card: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary600,
        borderRadius: 8,
        elevation: 8,
        //ios property
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
})