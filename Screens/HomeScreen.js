
import { View,Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const {width, height} = Dimensions.get('window')
import Lottie from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "./utils/asyncStroge";


export default function HomeScreen(){
    const navigation = useNavigation()
    const handleReset = async ()=>{
        await removeItem('onboarded')
        navigation.push('Onboarding')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.lottie}>
            <Lottie source={require('../assets/animations/con3.json')} autoPlay loop />
            </View>
            <Text style={styles.Text}>Welcome To Home Page</Text>
            <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                <Text>Reset Button</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    lottie:{
        width:width*0.9,
        height: width
    },
    Text:{
        fontSize: width*0.06,
        marginBottom:20
    },
    resetButton:{
        backgroundColor:'#34d399',
        padding: 10,
        borderRadius: 10
    }
})