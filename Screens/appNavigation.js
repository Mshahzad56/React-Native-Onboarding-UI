import React, {useEffect, useState} from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import OnboardingScreen from "./OnboardingScreen";
import { getItem } from "./utils/asyncStroge";

const stack = createNativeStackNavigator();

export default function AppNavigation(){

    const [showOnboarding, setShowOnboarding] = useState(null)
    useEffect(()=>{
        checkIfAlreadyOnboarded()
    }, [])

    const checkIfAlreadyOnboarded = async ()=>{
        let onboarding = await getItem('onboarded')
        if(onboarding==1){
            // hide onboarding
            setShowOnboarding(false)
        }else{
            // show onboarding
            setShowOnboarding(true)
        }
    }
    if(showOnboarding==null){
        return null
    }

    if(showOnboarding){
        return(
            <NavigationContainer>
                <stack.Navigator initialRouteName="Onboarding">
                    <stack.Screen name='Onboarding' options={{headerShown:false}} component={OnboardingScreen} />
                    <stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen} />
                </stack.Navigator>
            </NavigationContainer>
        )
    } else{
        return(
            <NavigationContainer>
                <stack.Navigator initialRouteName="Home">
                    <stack.Screen name='Onboarding' options={{headerShown:false}} component={OnboardingScreen} />
                    <stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen} />
                </stack.Navigator>
            </NavigationContainer>
        )
    }
    
}