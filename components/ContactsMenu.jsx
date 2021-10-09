import React from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const contactsMenuButtons = [
    {
        type: "starred",
        name: "Starred"

    },
    {
        type: "contact",
        name: "Apo Ololo",
        photo: require("../assets/apo.jpg")
    },
    {
        type: "contact",
        name: "Scholar Seyi",
        photo: require("../assets/scholar.jpg")
    },
    {
        type: "contact",
        name: "Omoge E",
        photo: require("../assets/eni.jpg")
    }
]
const ContactsMenu = () => {
    return (
        <View style={styles.container}>
            {contactsMenuButtons.map((contact, index) =>
                <View style={styles.row} key={index} >
                    {
                        contact.type == "starred" ? (
                            <View style={styles.starredIcon}>
                                <AntDesign name="star" size={30} color="#efefef" />
                            </View>) : (
                            <Image source={contact.photo} style={styles.image} />

                        )}

                    <Text style={styles.text}>{contact.name}</Text>
                </View>
            )}

        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'

    },
    starredIcon: {
        backgroundColor: "#333333",
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20
    },
    text: {
        color: "white",
        paddingLeft: 15,
        fontSize: 18
    }
})