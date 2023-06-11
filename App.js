import { useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import PickerCoin from './src/components/Picker';

import api from './src/services/api';

export default function App() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [coinSelected, setCoinSelected] = useState(null);
  const [valueCoin, setValueCoin] = useState(0);

  const [inputCoin, setInputCoin] = useState(null);
  const [conversionCoin, setConversionCoin] = useState(0);

  useEffect(() => {
    async function loadingCoins(){
      const response = await api.get('all');

      let arrayCoins = []
      Object.keys(response.data).map((key) => {
        arrayCoins.push({
          key: key,
          label: key,
          value: key
        })
      })

      setCoins(arrayCoins);
      setLoading(false);

    }
  
    loadingCoins();

  }, [])

  async function handleChange(){
    if (coinSelected === null || valueCoin === 0){
      alert('Por favor, selecione uma moeda!');
      return;
    }

    const response = await api.get(`all/${coinSelected}-BRL`)
    
    let result = (response.data[coinSelected].ask * parseFloat(valueCoin))
    setConversionCoin(`R$ ${result}`);
    setInputCoin(valueCoin);
  }
  

  if (loading){
    return (
      <View style={{ justifyContent:'center', alignItems: 'center', flex:1 }}>
        <ActivityIndicator
          color='#f9f9f9'
          size={45}
      />
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.contentCoin}>
        <Text style={styles.title}>Selecione sua Moeda</Text>
        <PickerCoin
          coins={coins}
          selectedValue={coinSelected}
          onChange={(coin) => setCoinSelected(coin)}
        />
      </View>
      <View style={styles.contentValue}>
        <Text style={styles.title}>
          Digite um valor para converter em R$
        </Text>
        <TextInput
          placeholder='Ex: 150'
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(value) => setValueCoin(value)}
        />
      </View>
      <TouchableOpacity style={styles.contentBtn} onPress={handleChange}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>
      {conversionCoin !== 0 && (
        <View style={styles.contentResult}>
          <Text style={styles.valueConvert}>
            {inputCoin} {coinSelected}
          </Text>
          <Text style={[styles.valueConvert, { fontSize: 18, margin: 10 }]}>
            Corresponde a
          </Text>
          <Text style={styles.valueConvert}>
            {conversionCoin}
          </Text>
        </View>
      )}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    alignItems: 'center',
    paddingTop: 40
  },
  contentCoin: {
    width:'90%',
    backgroundColor:'#f9f9f9',
    paddingTop: 9,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    marginBottom: 1
  },
  title: {
    fontSize: 15,
    color: '#121212',
    paddingTop: 5,
    paddingLeft: 5
  },
  contentValue: {
    width:'90%',
    backgroundColor:'#f9f9f9',
    paddingBottom: 9,
    paddingTop: 9
  },
  input:{
    width: '100%',
    padding:10,
    height: 45,
    fontSize: 20,
    marginTop: 8,
    color: '#121212'
  },
  contentBtn: {
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomEndRadius: 9,
    justifyContent:'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#f9f9f9',
    fontWeight: 'bold'
  },
  contentResult: {
    width: '90%',
    backgroundColor:'#f9f9f9',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  valueConvert: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#121212'
  }
});
