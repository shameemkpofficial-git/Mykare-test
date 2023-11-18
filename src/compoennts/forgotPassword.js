import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CONSTANS from "../service/constants.json"
import { colors } from '../service/colors'


const ForgotPassword = ({firstText,secondText}) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', marginTop:16, alignSelf:'center' }}>
            <Text style={styles.textStyle}>{firstText}</Text>
            <Text style={[styles.textStyle,{fontWeight:'600'}]}>{secondText}</Text>
        </TouchableOpacity>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color:colors.textBlack

    }
})