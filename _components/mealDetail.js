import { View, Image, Text, StyleSheet } from "react-native";

export default function MealDetail({data, textStyle}) {
    return (
        <View style={textStyle}>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{data.duration} m</Text>
                <Text style={styles.detailItem}>{data.complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{data.affordability.toUpperCase()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})