import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../service/colors'

const PrimaryButton = (props) => {
    const {
        onPress, btnTitle,btnColor
    } = props;
    return (
       
        <View style={{ marginHorizontal:30}}>
            <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:btnColor}]} onPress={onPress}>
                <Text style={styles.textStyle}>{btnTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 43,
        backgroundColor: colors.violet,
        borderRadius: 3,
        alignSelf: 'center',
        marginTop: 24,
    },
    textStyle: {
        color: colors.white,
        fontWeight: '700',
        lineHeight: 19,
        textAlign: 'center',
        marginTop: '4%'


        //         font-family: Open Sans;
        // font-size: 14px;
        // font-weight: 700;
        // line-height: 19px;
        // letter-spacing: 0px;
        // text-align: center;

    }

})