import { Pressable, StyleSheet, Text, View } from "react-native"
import { Colors } from "../sconstant/color";

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonContainer} >
            <Pressable
                onPress={onPress}
                android_ripple={{ color: '#f0c6c3'}}
                style={styles.innerContainer}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        margin: 4,
        elevation: 2,
        overflow: 'hidden'
    },
    innerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
})

export default PrimaryButton;