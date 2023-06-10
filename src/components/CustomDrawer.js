import React from 'react'
import { ImageBackground, StyleSheet, Image, View, Dimensions } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { COLORS, IMGS } from '../constants'

const {width} = Dimensions.get('screen');

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground source={IMGS.bgPattern} style={{ height: 140, top: -5 }}>
                <Image source={IMGS.user} style={styles.userImg} />
            </ImageBackground>
            <View style={styles.drawerListWrapper}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    userImg: {
        width: 110,
        height: 110,
        borderRadius: 55,
        position: 'absolute',
        left: width / 2 - 110,
        bottom: -55,
        borderWidth: 4,
        borderColor: COLORS.white,
    },
    drawerListWrapper: {
        marginTop: 65,
    },
});