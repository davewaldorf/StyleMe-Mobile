import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import  TextInput  from './TextInput';

export default function DatePickerInput() {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');

  const showPicker = () => {
    setIsVisible(true);
  };

  const hidePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    hidePicker();
    const formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
    setValue(formattedDate);
  };

  return (
    <>
      <TouchableOpacity onPress={showPicker}>
        <TextInput icon={'date'}>{value || 'Select Date'}</TextInput>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        display="inline"
      />
    </>
  );
}
