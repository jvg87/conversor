import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

export default function PickerCoin() {

  const [ selectedCoin, setSelectedCoin ] = useState();

  return (
    <Picker
      selectedValue={selectedCoin}
      onValueChange={(itemValue, itemIndex) => setSelectedCoin(itemValue)}
      style={{fontSize:20, color:'#121212'}}
    >
      <Picker.Item
        enabled={true}
        style={{color:'gray'}}
        key='1'
        label='Selecione uma moeda..'
        value='USD'
      />
      <Picker.Item
        key='2'
        label='USD'
        value='USD'
      />
      <Picker.Item
        key='3'
        label='EUR'
        value='EUR'
      />
    </Picker>
  )
}
