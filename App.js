import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PickerCoin from './src/components/Picker';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentCoin}>
        <Text style={styles.title}>Selecione sua Moeda</Text>
        <PickerCoin/>
      </View>
      <View style={styles.contentValue}>
        <Text style={styles.title}>
          Digite um valor para converter em R$
        </Text>
        <TextInput
          placeholder='Ex: 150'
          style={styles.input}
          keyboardType='numeric'
        />
      </View>
      <TouchableOpacity style={styles.contentBtn}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>
      <View style={styles.contentResult}>
        <Text style={styles.valueConvert}>
          3 USD
        </Text>
        <Text style={[styles.valueConvert, { fontSize: 18, margin: 10 }]}>
          Corresponde a
        </Text>
        <Text style={styles.valueConvert}>
          19,90
        </Text>
      </View>
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
