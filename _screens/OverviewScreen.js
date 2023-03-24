import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../_data/dummyData';
import MealOverView from '../_components/mealOverview';

function OverviewScreen() {
  const route = useRoute()
  const navigation = useNavigation()
  const id = route.params.categoryId

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id == id );
    navigation.setOptions({
      title: category.title
    });
  }, [id, navigation])

  const listMeal = MEALS.filter((item) => {
    return item.categoryIds.indexOf(id) >= 0;
  })

  const renderMeal = (data) => {
    const item = data.item
    const mealProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }
    return (
      <MealOverView data={mealProps} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: 'black',
  }
});

export default OverviewScreen