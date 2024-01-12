import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';


import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import PeekingFox3 from '../../../assets/Register/icons/PeekingFox3.png';
import chatbox from '../../../assets/Register/icons/chatbox.png';
import chatboxtext from '../../../assets/Register/icons/yukmulaitext.png';
import FacebookIcon from '../../../assets/Login/Icon/facebookicons.png'
import GoogleIcon from '../../../assets/Login/Icon/googleicons.png'

const AuthScreens = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [namalengkap, setNamaLengkap] = useState('');

    const handleForgotPassword = () => {
        // Implement your logic here
        console.log('Lupa Password pressed!');
    };

    const masukPressed = () => {
        console.log('Masuk Pressed');
    }

    return (
        <View style={[tw`flex-1 w-full`, { backgroundColor: '#FFD4B8' }]}>
            <View style={[tw`relative justify-end h-1/3 rounded-br-10 rounded-bl-10`, { backgroundColor: '#F37704' }]}>
                <View style={[tw`absolute flex-row items-center justify-between w-full`, {}]}>
                    <View style={[tw`relative left-15`]}>{/* Make the parent relative */}
                        <Image style={[tw`right-5`, {}]} source={chatbox} />
                        <Image style={[tw`absolute top-4 left-5 right-5 bottom-0`, {}]} source={chatboxtext} />
                    </View>
                    <Image style={[tw`w-50 h-50`, {}]} source={PeekingFox3} />
                </View>
            </View>
            <View style={[tw`flex flex-col gap-5 h-full py-10 px-10`, {}]}>
                <CustomInput
                    placeholder="Nama Lengkap"
                    value={namalengkap}
                    setValue={setNamaLengkap}
                />

                <CustomInput
                    placeholder="Username atau Email"
                    value={username}
                    setValue={setUsername}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={[tw`text-right`, { color: '#8B340D' }]}>Lupa Password?</Text>
                </TouchableOpacity>

                <CustomButton roundCorner='5' text="DAFTAR" onPress={masukPressed} />

                <Text style={[tw`text-center text-xl`, { color: '#8B340D' }]} >ATAU</Text>
                <View style={[tw`flex flex-row gap-5 justify-center`]}>
                    {/* <Image source={googleIcon} /> */}
                    <Image source={FacebookIcon} />
                    <Image source={FacebookIcon} />
                </View>
            </View>
        </View>
    );
};

export default AuthScreens;
