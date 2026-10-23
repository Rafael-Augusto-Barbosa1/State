import { StyleSheet, ScrollView } from 'react-native';
import Exercicio1 from './components/Exercicio1';
import Exercicio2 from './components/Exercicio2';
import Exercicio3 from './components/Exercicio3';
import Exercicio4 from './components/Exercicio4';
import Exercicio5 from './components/Exercicio5';


export default function App() {
  return (
    <ScrollView Style={styles.container}>
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 />
      <Exercicio4 />
      <Exercicio5 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
