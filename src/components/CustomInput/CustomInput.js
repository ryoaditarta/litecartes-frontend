import React from 'react';
import { View, TextInput } from 'react-native';
import tw from 'twrnc';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={[tw`w-full border-1 rounded-10 p-3`, { borderWidth: 3, borderColor: '#8B340D' }]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#8B340D" // Specify the color for the placeholder text
        style={[tw``, { color: '#8B340D' }]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
