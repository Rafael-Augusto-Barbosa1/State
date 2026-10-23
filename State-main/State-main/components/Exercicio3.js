import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Exercicio3() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 3 — Nome do Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.texto}>{nome === '' ? 'Digite seu nome' : nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 6, padding: 8 },
  texto: { fontSize: 18, marginTop: 8, textAlign: 'center' },
});
