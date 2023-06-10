import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList, Dimensions, ScrollView, Button } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../constants';
// import { FavoriteContext } from '../../store/context/favourite-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/redux/favoriteSlice'

const { width } = Dimensions.get('screen');

const Wallet = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Electrical expenses",
      bill: "$4,000"
    },
    {
      id: 2,
      name: "Marketing expenses",
      bill: "$8,000"
    },
    {
      id: 3,
      name: "Purchase of inventory",
      bill: "$30,000"
    },
    {
      id: 4,
      name: "Rental expenses",
      bill: "$20,000"
    },
    {
      id: 5,
      name: "Forensic  expenses",
      bill: "$40,000"
    },
  ])

  //================================================================= uncomment for using usecontext 

  // const favoriteProps = useContext(FavoriteContext)

  // const transactionsFav = favoriteProps.item.includes(transactions)

  // const favoriteHandler = (item) => {
  //   const index = favoriteProps.item.findIndex(fav => fav.id === item.id);
  //   if (index === -1) {
  //     favoriteProps.addFavorite(item);
  //   } else {
  //     favoriteProps.deleteFavorite(item);
  //   }
  // }

  //================================================================= uncomment for using redux

  const dispatch = useDispatch();
  const favoriteProps = useSelector(state => state.favorite);

  const favoriteHandler = (item) => {
    const index = favoriteProps.findIndex(fav => fav.id === item.id);
    if (index !== -1) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: COLORS.bgColor,
      }}>
      <Text style={{ textTransform: "uppercase", fontWeight: "700" }}>List of Transaction!</Text>

      {/*======================================= tampilan untuk context  ==========================================*/}
      {/* <FlatList
        style={{
          flex: 1,
          left: width / 6.6,
          marginTop: 20
        }}
        data={transactions}
        renderItem={(data) => {
          const transactionsFav = favoriteProps.item.some(fav => fav.id === data.item.id);
          return (
            <View style={styles.listItem}>
              <View>
                <Text style={styles.itemText}>{data.item.name}</Text>
                <Text style={styles.itemText}>{data.item.bill}</Text>
              </View>
              <Pressable
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={() => { favoriteHandler(data.item) }}
              >
                <IonIcons name={transactionsFav ? 'md-star' : "md-star-outline"} size={18} color={"#f2a130"} />
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical={false}
      /> */}

      {/*======================================= tampilan untuk redux  ==========================================*/}
      <FlatList
        style={{
          flex: 1,
          left: width / 6.6,
          marginTop: 20
        }}
        data={transactions}
        renderItem={(data) => {
          const transactionsFav = favoriteProps.some(fav => fav.id === data.item.id);
          return (
            <View style={styles.listItem}>
              <View>
                <Text style={styles.itemText}>{data.item.name}</Text>
                <Text style={styles.itemText}>{data.item.bill}</Text>
              </View>
              <Pressable
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={() => { favoriteHandler(data.item) }}
              >
                <IonIcons name={transactionsFav ? 'md-star' : "md-star-outline"} size={18} color={"#f2a130"} />
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical={false}
      />
      <Pressable onPress={() => console.log(favoriteProps)}>
        <Text>
          console
        </Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "70%",
    marginVertical: 10,
    backgroundColor: COLORS.white,
  },
  itemText: {
    color: '#351401',
  },
  buttonPressed: {
    opacity: 0.8,
  }
});

export default Wallet;
