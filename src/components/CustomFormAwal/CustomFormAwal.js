import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

const CustomFormAwal = ({ gambarFox, text }) => {
    return (
        <View style={[tw`flex-row items-center w-95% justify-center h-50 rounded-5`, { backgroundColor: '#F37704' }]}>
            <Image
                style={[tw`h-35 w-40%`, { resizeMode: 'contain', marginVertical: 0 }]}
                source={gambarFox}
            />
            <View style={[tw`flex-1`, { resizeMode: 'contain' }]}>
                <Text style={[tw`text-center text-base text-white`]}>
                    {text}
                </Text>
            </View>
        </View>
    );
}

export default CustomFormAwal;
