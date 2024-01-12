import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';


import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import PeekingFox1 from '../../../assets/Login/Icon/PeekingFox/peekingfox1.png';
import chatbox from '../../../assets/Login/Icon/chatbox/chatboxcream.png';
import chatboxtext from '../../../assets/Login/Icon/chatbox/yukmsukbrown.png';
import FacebookIcon from '../../../assets/Login/Icon/facebookicons.png'
import GoogleIcon from '../../../assets/Login/Icon/googleicons.png'

const AuthScreens = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                    <Image style={[tw`w-50 h-50`, {}]} source={PeekingFox1} />
                    <View style={[tw`relative`]}>{/* Make the parent relative */}
                        <Image style={[tw`right-10`, {}]} source={chatbox} />
                        <Image style={[tw`absolute top-4 left- right-18 bottom-0`, {}]} source={chatboxtext} />
                    </View>
                </View>
            </View>
            <View style={[tw`flex flex-col gap-5 h-full py-20 px-10`, {}]}>
                <CustomInput
                    placeholder="Username"
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

                <CustomButton roundCorner='5' text="MASUK" onPress={masukPressed} />

                <Text style={[tw`text-center text-xl`, {color: '#8B340D'}]} >ATAU</Text>
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
