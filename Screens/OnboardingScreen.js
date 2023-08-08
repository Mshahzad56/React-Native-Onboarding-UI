import Lottie from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper'
import { View, Text , StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { setItem } from './utils/asyncStroge';


const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home')
        setItem('onboarded', '1')
    }

    const doneButton = ({...props})=>{
        return(
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text>Done</Text>
        </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      buttomBarHighlight={false}
      DoneButtonComponent={doneButton}

      containerStyles={{paddingHorizontal:15}}
  pages={[
    {
      backgroundColor: '#a7f3d0',
      image: (
        <View style={styles.lottie}>
        <Lottie source={require('../assets/animations/animi1.json')} autoPlay loop />
        </View>
      ),

      title: 'Rahan pd',
      subtitle: 'Onboarding UI Screen with Swiper',
    },
    {
        backgroundColor: '#fef3c7',
        image: (
          <View style={styles.lottie}>
          <Lottie source={require('../assets/animations/animi2.json')} autoPlay loop />
          </View>
        ),
        
        title: 'Login And Signup',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#a78bfa',
        image: (
          <View style={styles.lottie}>
          <Lottie source={require('../assets/animations/animi3.json')} autoPlay loop />
          </View>
        ),
        
        title: 'Order And delivery',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    lottie:{
        width:width*0.9,
        height: width
    },
    doneButton:{
        padding: 20,
        backgroundColor:'white',
        borderTopLeftRadius:100,
        borderBottomLeftRadius: 100,
    }
    
})