// CustomButton.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';

const CustomButton = ({ text, onPress, sizeX, sizeY, roundCorner }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                tw`rounded-${roundCorner} p-2 w-${sizeX} h-${sizeY}`,
                { backgroundColor: pressed ? '#6B2508' : '#8B340D' },
            ]}
            onPress={onPress}
            android_ripple={{ color: '#6B2508' }}
        >
            <Text style={[tw`text-center text-xl font-bold`, { color: '#FFD4B8' }]}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;
