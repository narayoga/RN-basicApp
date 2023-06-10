import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../../constants';

import { FavoriteContext } from '../../store/context/favourite-context';

const FavoriteScreen = () => {
    const { item } = useContext(FavoriteContext)
    const stateFav  = useSelector(state => state.favorite) 
    console.log(stateFav)

// ===================================  kalo mau pake redux isi "stateFav" kalo context "item" ========================
    if (stateFav.length === 0) { 
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.bgColor,
                }}>
                <Text>There's no favorite</Text>
                <Text>you can start checking the transaction on <Text style={{ color: COLORS.danger }}>Wallet</Text> screen </Text>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.bgColor,
                paddingTop: 50,
            }}>
            <Text style={{fontWeight: "700"}}>
                LIST FAVORITE
            </Text>
            <FlatList
                style={{
                    flex: 1,
                    left: 25,
                    marginTop: 20
                }}
// ===================================  kalo mau pake redux isi "stateFav" kalo context "item" ========================
                data={stateFav} 
                renderItem={(data) => {
                    return (
                        <View style={styles.listItem}>
                            <Pressable android_ripple={{color:COLORS.grayLight}} style={styles.listContainer}>
                                <Text style={styles.itemText}>{data.item.name}</Text>
                                <Text style={styles.itemText}>{data.item.bill}</Text>
                            </Pressable>
                        </View>
                    );
                }}
                keyExtractor={(item, index) => {
                    return item.id
                }}
                alwaysBounceVertical={false}
            />
        </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 2,
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itemText : {
        color: COLORS.primary ,
    }
});
