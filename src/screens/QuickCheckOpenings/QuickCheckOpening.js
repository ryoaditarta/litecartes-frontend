import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import SafeViewAndroid from '../../androidscreensettings/androidscreensettings';
import PeekingFox from '../../../assets/QuickCheckOpeings/icon/PeekingFox.png';

const YukLanjutkanButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={[tw`rounded-50 items-center p-2 w-full`, { backgroundColor: '#8B340D' }]} onPress={onPress}>
            <Text style={[tw`text-base`, { fontWeight: '800', color: '#FFD4B8' }]}>
                Yuk Lanjutkan
            </Text>
        </TouchableOpacity>
    );
};

const QuickCheckOpenings = () => {
    const yukLanjutkanButtonPressed = () => {
        console.log('LLanjutkan Pengecekan');
    };

    return (
        <SafeAreaView style={[tw`flex-1`, SafeViewAndroid.AndroidSafeArea, { backgroundColor: '#FFD4B8' }]}>
            <View style={tw`flex-1 justify-center`}>
                <View style={tw`flex-1 flex-col justify-between px-10`}>
                    <View>
                        {/* Content above, adjust as needed */}
                    </View>

                    <View style={tw`flex-col gap-5`}>
                        <View style={tw``}>
                            <View style={[tw`right-10 left-40 bg-white p-3 rounded-5 w-35`, {backgroundColor: '#F37704' }]}>
                                <Text style={[tw`text-white text-xl`]}>Apa ya Ini?</Text>
                            </View>
                        </View>

                        <View style={tw`top-2 flex-col items-start gap-5`}>
                            <Image source={PeekingFox} style={[tw`w-40 h-40`, { resizeMode: 'cover' }]} />
                        </View>
                    </View>

                </View>

                <View style={[tw`flex flex-col justify-between p-10 w-full rounded-tl-20 rounded-tr-20 h-1/3 items-center`, { backgroundColor: '#F37704' }]}>
                    <View style={tw`items-center flex-grow`}>
                        <Text style={[tw`text-white text-2xl mb-3`, { fontWeight: 'bold' }]}>LITERASI QUICKCHECK</Text>
                        <Text style={[tw`text-white text-center`, { marginBottom: 20 }]}>
                            Sebelum kita mulai petualangan literasi, jawab 4 pertanyaan cepat untuk menentukan level literasi kamu
                        </Text>
                    </View>
                    <YukLanjutkanButton onPress={yukLanjutkanButtonPressed} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default QuickCheckOpenings;
