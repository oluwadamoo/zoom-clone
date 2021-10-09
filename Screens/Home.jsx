
import React from 'react'
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import ContactsMenu from '../components/ContactsMenu'
import Header from '../components/Header'
import MenuButtons from '../components/MenuButtons'
import Searchbar from '../components/Searchbar'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
                <Header />

                <Searchbar />

                <MenuButtons navigation={navigation} />

                <ContactsMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15,


    }
})