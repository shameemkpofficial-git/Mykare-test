import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../service/colors';
import CONSTANS from "../../service/constants.json"
import RocketSvg from '../../images/svg/rocket.js'
import InputText from '../../compoennts/InputText';
import PrimaryButton from '../../compoennts/button';
import ForgotPassword from '../../compoennts/forgotPassword';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [localDatas, setLocalDatas] = useState("")

    const navigation = useNavigation()

    const loginHandler= async()=>{
        const usernameChecker = localDatas.find(([key, value]) => value.userName === username);
        const passwordChecker =localDatas.find(([key, value]) => value.password === password);
        if (usernameChecker && passwordChecker){
            console.log("username: ", username);
        }else{
            alert('user not registered')
        }
    }

    const fetchAllDataLocally = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const data = await AsyncStorage.multiGet(keys);
      
          const parsedData = data.map(([key, jsonString]) => {
            const parsedValue = JSON.parse(jsonString);
            return [key, parsedValue];
          });
      
          console.log(parsedData);
          setLocalDatas(parsedData);
        } catch (error) {
          console.error('Error getting all data:', error);
        }
      };
      
      useEffect(() => {
        fetchAllDataLocally()
      }, [])
      
      

    return (
        <SafeAreaView style={styles.mainContainer}>
       
            <View style={{height:'50%'}}>
            <ImageBackground source={require('../../images/png/wave-bg.png')} style={[styles.imageContainer,{top:-screenHeight/7}]}>
                <View style={{padding:30, marginTop:88}}>
                <Text style={styles.mainTitle}>{CONSTANS.LOGIN.MAIN_TITLE}</Text>
                <Text style={styles.descriptionTitle}>{CONSTANS.LOGIN.DESCRIPTION}</Text>
                </View>
                <View style={{ padding: screenWidth / 10, marginLeft:screenWidth/1.7}}>
                    <RocketSvg />
                </View>
            </ImageBackground>
            </View>
            <View style={{height:'50%', marginTop:40}}>
            <InputText value={username} onChangeText={setUsername} placeholder={"Username"}/>
            <InputText value={password} onChangeText={setPassword} locked={true} placeholder={"Password"} />
            <PrimaryButton btnTitle={CONSTANS.LOGIN.BUTTON_TITLE} btnColor={colors.violet} onPress={()=> loginHandler()} />
            <ForgotPassword firstText={CONSTANS.LOGIN.FORGOT_PASSWORD} secondText={CONSTANS.LOGIN.RESTORE}/>
            <PrimaryButton btnTitle={CONSTANS.LOGIN.SIGNUP} btnColor={colors.darkViolet} onPress={()=> navigation.navigate('Registration')} />
        </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    imageContainer: {
        height: 460,
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