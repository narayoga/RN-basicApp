import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, View, StyleSheet, Pressable } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { MEALS } from "../_data/dummyData";
import MealDetail from "../_components/mealDetail";
import { List, Subtitle } from "../_components/subtitle";
import AntdesignIcon from 'react-native-vector-icons/AntDesign'

export default function DetailScreen() {
  const route = useRoute()
  const navigation = useNavigation()

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  const data = {
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
  }

  function headerButton() {
    console.log('pressed')
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          // <CustomIcon icon={'engineering'} color={'rgba(245,73,88,255)'} onPress={headerButton} />
          <Pressable
                android_ripple={'red'}
                style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                onPress={()=> console.log('staro')}
            >
            <AntdesignIcon name="star" size={24} color='#fff' /> 
          </Pressable>
        )
      }
    })
  }, [navigation, headerButton])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        data={data}
        textStyle={styles.detailText}
      />
      <View style={{ alignItems: 'center' }}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>

  )
}


const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  buttonPressed: {
    opacity: 0.8,
}
});