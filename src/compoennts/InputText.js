import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CONSTANTS from "../service/constants.json"
import { colors } from '../service/colors'
import LockSvg from '../images/svg/lock'

const InputText = (props) => {
    const {value, onChangeText,locked,placeholder} = props;
  return (
    <View style={{marginTop:10, marginHorizontal:30, flexDirection:'row'}}>
      <TextInput style={styles.textInputStyle} placeholder={placeholder} value={value} onChangeText={onChangeText} ></TextInput>
    { locked===true? <TouchableOpacity style={{alignSelf:'center', right:'60%'}}>
       <LockSvg/>
       </TouchableOpacity> : null}
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({

    textInputStyle:{
        width:'100%',
        height:43,
        backgroundColor:'#fff',
        alignSelf:'center',
        borderColor:colors.border,
        borderWidth:2,
        borderRadius:3,
        paddingLeft:16,


    }


})