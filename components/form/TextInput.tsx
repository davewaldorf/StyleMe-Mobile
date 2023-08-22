import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';
import { EntypoIconTypes } from '@expo/vector-icons/build/Entypo';

interface TextInputProps {
  icon: EntypoIconTypes;
  [otherProps: string]: any;
}

export default function TextInput({ icon, ...otherProps }: TextInputProps) {
  const validationColor = '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          secureTextEntry={icon === 'lock'}
          {...otherProps}
        />
      </View>
    </View>
  );
}