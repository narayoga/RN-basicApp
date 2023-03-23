import { View, StyleSheet, Text } from "react-native"
import { Colors } from "../sconstant/color"

export default function LogGuess({index, guessNumber}){
 return(
    <View style={[styles.container]}>
        <Text>#{index}</Text>
        <Text>computer guess: {guessNumber}</Text>
    </View>
 )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 7,
        padding: 12,
        borderWidth: 1,
        borderColor: Colors.accent,
        borderRadius: 8,
    },
})