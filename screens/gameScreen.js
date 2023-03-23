import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text, Pressable, FlatList } from "react-native";
import Card from "../scomponent/card";
import NumberContainer from "../scomponent/numberContainer";
import PrimaryButton from "../scomponent/primaryButton";
import Title from "../scomponent/title";
import { Colors } from "../sconstant/color";
import LogGuess from "../scomponent/guessLog";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [logGuess, setLogGuess] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(logGuess.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                'PRIIIT.....!!',
                "liar don't allow playing",
                [
                    { text: 'apologize', style: 'destructive' },
                ]
            )
            return
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
            const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
            setCurrentGuess(newRndNumber);
            setLogGuess(prevGuessRound => [newRndNumber, ...prevGuessRound]);
        } else {
            minBoundary = currentGuess + 1;
            const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
            setCurrentGuess(newRndNumber);
            setLogGuess(prevGuessRound => [newRndNumber, ...prevGuessRound]);
        }
    }
    return (
        <View style={styles.container}>
            <Title>Computer Guess</Title>
            <NumberContainer children={currentGuess} />
            <Card>
                <Text>Higher or Lower?</Text>
                <View style={styles.containerButton}>
                    <DirectionButton onPress={nextGuessHandler.bind(this, 'greater')} children={"+"} />
                    <DirectionButton onPress={nextGuessHandler.bind(this, 'lower')} children={"-"} />
                </View>
            </Card>
            <FlatList
                data={logGuess}
                renderItem={(itemData => <LogGuess guessNumber={itemData.item} index={itemData.index + 1} />)}
                keyExtractor={item => item}
            />
        </View>
    )
}

const DirectionButton = ({ onPress, children }) => {
    return (
        <Pressable
            android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true }}
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 62,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        marginHorizontal: 12
    },
    text: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
    },
})