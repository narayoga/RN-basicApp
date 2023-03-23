import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../scomponent/primaryButton";
import Title from "../scomponent/title";
import { Colors } from "../sconstant/color";

export default function GameOverScreen({userNumber, guessRound, onStart}) {
    return (
        <View style={styles.rootContainer}>
            {/* <Title>GAME OVER </Title> */}
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../sassets/over.jpg')}
                />
            </View>
            <Text style={styles.summaryText}>
                computer has to guess <Text style={styles.highlightText}>{guessRound}</Text> times to guess the correct <Text style={styles.highlightText}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStart}>RETRY</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        opacity: 0.5,
        borderColor: 'white',
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 18,
        fontFamily: "open-sans",
        textAlign: 'center',
        marginBottom: 20,
    },
    highlightText: {
        fontWeight: 'bold',
        color: Colors.primary500,
    },
})