import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import SafeViewAndroid from '../../androidscreensettings/androidscreensettings';
import WelcomingMascot from '../../../assets/authenticationScreens/icons/authenticationmascott.png';

const RegisterButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={[tw`p-3 rounded-50 items-center`, { backgroundColor: '#8B340D' }]} onPress={onPress}>
            <Text style={[tw`text-white font-extrabold text-xl`, { fontFamily: 'Nunito', color: '#FFD4B8' }]}>DAFTAR SEKARANG</Text>
        </TouchableOpacity>
    );
};

const SudahPunyaAkunButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={[tw`rounded-50`, {}]} onPress={onPress}>
            <Text style={[tw`text-base`, { fontWeight: '800', fontFamily: 'Nunito', color: '#8B340D' }]}>Saya sudah punya akun</Text>
        </TouchableOpacity>
    )
}

const AuthScreens = () => {

    //some functions for button press
    const handleRegisterPress = () => {
        console.log('User registered!');
    };

    const handleSudahPunyaAkunPress = () => {
        console.log('Sudah Punya Akun')
    }

    return (
        <SafeAreaView style={[tw`flex-1 justify-center items-center m-10 w-full`, SafeViewAndroid.AndroidSafeArea, { backgroundColor: '#FFD4B8' }]}>
            <View style={tw`flex-1 justify-center items-center`}>
                <Image source={WelcomingMascot} style={tw`w-50 h-50`} />
                <Text style={[tw`w-50 text-xl text-center font-extrabold mt-15 mb-5`, { fontFamily: 'Nunito', color: '#8B340D' }]}>
                    SELAMAT DATANG SOBAT LITECARTES
                </Text>
                <Text style={[tw`w-70 text-base text-center font-semibold`, { fontFamily: 'Nunito', color: '#8B340D' }]}>
                    Mari kita mulai petualangan literasi!
                </Text>
            </View>
            <View style={tw` p-5 w-5/6`}>
                <RegisterButton onPress={handleRegisterPress} />
            </View>
            <View style={tw``}>
                <SudahPunyaAkunButton onPress={handleSudahPunyaAkunPress} />
            </View>
        </SafeAreaView>

    );
};

export default AuthScreens;
