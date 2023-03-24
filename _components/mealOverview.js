import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { color } from "../_models/color";
import { useNavigation} from "@react-navigation/native"

export default function MealOverView({ data }) {
    const navigation = useNavigation()

    const detailHandler = () => {
        navigation.navigate('MenuDetail', {
            mealId : data.id
        })
    }

    return (
        <View style={styles.mealApp}>
            <Pressable
                android_ripple={{color:color.accent500}}
                style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                onPress={detailHandler}
            >
                <View>
                    <Image style={styles.image} source={{ uri: data.imageUrl }} />
                    <Text style={styles.title} >{data.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{data.duration} m</Text>
                    <Text style={styles.detailItem}>{data.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{data.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealApp: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 5,
        color: color.text
    },
    image: {
        width: "100%",
        height: 200
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        color: color.text,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: color.text
    },
    buttonPressed: {
        opacity: 0.9,
    }
})