import { StyleSheet, Text, View } from 'react-native';
import PickerCoin from './src/components/Picker';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentCoin}>
        <Text style={styles.title}>Selecione sua Moeda</Text>
        <PickerCoin/>
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
  }
});
