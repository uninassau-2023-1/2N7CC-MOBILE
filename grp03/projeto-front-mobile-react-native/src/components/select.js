import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectComponent = ({onChange}) => {
  const [selectedOption, setSelectedOption] = useState('geral');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    onChange(value)
  };

  return (
    <View>
      <Text>Selecione o tipo de exame</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
      >
        <Picker.Item label="Geral" value="geral" />
        <Picker.Item label="Exame" value="exame" />
        <Picker.Item label="Prioridade" value="prioridade" />
      </Picker>
    </View>
  );
};

export default SelectComponent;
