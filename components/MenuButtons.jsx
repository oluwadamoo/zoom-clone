import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New Meeting",
        customColor: "#ff751f"
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join"
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule"
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen"
    },
]
const MenuButtons = () => {
    return (
        <View style={styles.container}>

            {
                items.map((item, index) =>
                    <View style={styles.buttonContainer} key={index}>
                        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, backgroundColor: item.customColor ? item.customColor : "#0470bc", ...styles.button }]}>
                            <FontAwesome name={item.name} size={23} color="#efefef" />
                        </Pressable>
                        <Text style={styles.menuText}>{item.title}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: "#1f1f1f",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonContainer: {
        alignItems: "center",
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuText: {
        color: "#858585",
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '600'
    }
})