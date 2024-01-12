import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import CustomProgressBar from '../../components/CustomProgressBar/CustomProgressBar';
import CustomFormAwal from '../../components/CustomFormAwal/CustomFormAwal';
import ListOption from '../../components/ListOption/ListOption'
import CustomButton from '../../components/CustomButton/CustomButton';

import SafeViewAndroid from '../../androidscreensettings/androidscreensettings';
import fox1 from '../../../assets/QuickCheckOpeings/icon/fox1.png'
import fox2 from '../../../assets/QuickCheckOpeings/icon/fox2.png'
import fox3 from '../../../assets/QuickCheckOpeings/icon/fox3.png'
import fox4 from '../../../assets/QuickCheckOpeings/icon/fox4.png'


import tw from 'twrnc'

const SoalQuickCheck = () => {
    let foxImage = [fox1, fox2, fox3, fox4]

    const onPressLanjutkan = () =>{
        console.log("lanjut"); 
    }

    return (
        <SafeAreaView style={[tw`flex-1 my-15 mx-2 `, SafeViewAndroid.AndroidSafeArea, { backgroundColor: '#FFD4B8' }]}>
            <View style={[tw` flex-col gap-5 justify-center items-center`, {}]}>
                <CustomProgressBar />
                <CustomFormAwal gambarFox={foxImage[0]} text="Sejauh mana kamu merasa yakin dalam mengekspresikan pemikiran secara tertulis?" />
                <ListOption />

                <CustomButton style={[tw`mt-10`]} sizeX='full' roundCorner='5' text='Yuk Lanjutkan' onPress={onPressLanjutkan}/>
            </View>

        </SafeAreaView >
    )
}

export default SoalQuickCheck; 
