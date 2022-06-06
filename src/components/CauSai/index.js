import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function CauSai({ navigation }) {
    return (
        <ScrollView>
            <Text style={styleCauSai.textPhatTrien}>TÍnh năng đang phát triển</Text>
        </ScrollView>
    )
}

const styleCauSai = StyleSheet.create({
    textPhatTrien: {
        fontSize:20,
        fontWeight:'bold',
        padding:50,
        textAlign:'center'
        
    }
});