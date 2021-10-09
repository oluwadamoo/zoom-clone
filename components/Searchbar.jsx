import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import { Fontisto } from '@expo/vector-icons';

const Searchbar = () => {
    return (
        <View style={styles.container}>

            <Fontisto name="search" size={20} color={'#858585'} />
            <TextInput
                style={styles.textSearchBar}
                placeholder="Search"
                placeholderTextColor="#858585"
            />

        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flexDirection: "row",
        paddingHorizontal: 10,
        height: 40,
        alignItems: "center",
        borderRadius: 10
    },
    textSearchBar: {
        color: "#858585",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        width: Dimensions.get("screen").width / 1.25,

    }
})