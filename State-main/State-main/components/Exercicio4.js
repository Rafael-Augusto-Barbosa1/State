import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Exercicio4() {
  const [senha, setSenha] = useState('');
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 4 — Mostrar e Ocultar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={!visivel}
        autoCapitalize="none"
      />
      <Button
        title={visivel ? 'Ocultar senha' : 'Mostrar senha'}
        onPress={() => setVisivel(!visivel)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 6, padding: 8, marginBottom: 8 },
});
