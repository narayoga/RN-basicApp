import { FlatList } from 'react-native';
import CategoryGridTile from '../_components/categoryGridTile';

import { CATEGORIES } from '../_data/dummyData';

function CategoriesScreen({ navigation }) {

  function renderCategoryItem(itemData) {
    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} data={itemData} />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;