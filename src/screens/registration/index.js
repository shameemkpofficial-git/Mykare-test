import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../service/colors'
import CONSTANS from "../../service/constants.json"
import InputText from '../../compoennts/InputText'
import PrimaryButton from '../../compoennts/button'
import ForgotPassword from '../../compoennts/forgotPassword'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'


const Registration = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigation = useNavigation()

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const registrationHandler = ()=>{
        if(password === confirmPassword){
            userStoreLocal()
        }else{
            alert('Password not match with confirm password')
        }
    }

    const userStoreLocal = async () => {
        try {
          const key = `userAuth_${userName}`;
      
          const existingUserString = await AsyncStorage.getItem(key);
      
          if (existingUserString) {
            alert('User with this username already exists. Please choose a different username.');
            return;
          }
      
          const credentials = { userName, password };
          const credentialsString = JSON.stringify(credentials);
      
          await AsyncStorage.setItem(key, credentialsString);
      
          alert('Credentials stored successfully');
        } catch (error) {
          alert('Error storing credentials:', error);
        }
      };
    
  return (
   <SafeAreaView style={styles.mainContainer}>
    <View style={{height:'50%'}}>
    <ImageBackground style={[styles.imageContainer,{height:screenHeight/1.8, top:- screenHeight/10}]} source={require('../../images/png/wave2-bg.png')}>
    <View style={{padding:30, marginTop:88}}>
                <Text style={styles.mainTitle}>{CONSTANS.REGISTRATION.REGISTRATION}</Text>
                <Text style={styles.descriptionTitle}>{CONSTANS.REGISTRATION.DESCRIPTION}</Text>
                </View>
    </ImageBackground>
    </View>
    <InputText value={userName} onChangeText={setUserName} placeholder={CONSTANS.REGISTRATION.NAME_PLACEHOLDER} />
    <InputText value={password} onChangeText={setPassword} placeholder={CONSTANS.LOGIN.PLACEHOLDER} locked={true} />
    <InputText value={confirmPassword} onChangeText={setConfirmPassword} placeholder={CONSTANS.REGISTRATION.PASSWORD_PLACEHOLDER}   locked={true} />
    <PrimaryButton btnTitle={CONSTANS.LOGIN.BUTTON_TITLE} btnColor={colors.violet} onPress={()=> registrationHandler()} />
    <ForgotPassword firstText={CONSTANS.REGISTRATION.ALREADY_MEMBER} secondText={CONSTANS.REGISTRATION.LOGIN} />
   </SafeAreaView>
  )
}

export default Registration

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    imageContainer: {
        width: '100%',
        
    },
    mainTitle: {
        fontSize: 34,
        fontWeight: '700',
        lineHeight: 41,
        textAlign: 'left',
        // color:'red'
        color: colors.white,
        
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 23,
        textAlign: 'left',
        // color:'red'
        color: colors.white,
        marginTop: 16
    }
})