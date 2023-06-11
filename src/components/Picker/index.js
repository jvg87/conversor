import {Picker} from '@react-native-picker/picker';

export default function PickerCoin({coins, selectedValue, onChange}) {


  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
      style={{fontSize:20, color:'#121212'}}
    >
      <Picker.Item
        enabled={true}
        style={{color:'gray'}}
        label='Selecione uma moeda..'
        value={null}
      />
      {coins.map((coin) => (
        <Picker.Item
          key={coin.key}
          label={coin.label}
          value={coin.value}
        />
      ))}
    </Picker>
  )
}
