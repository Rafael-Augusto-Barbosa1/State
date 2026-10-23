import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Exercicio5() {
  const [curtidas, setCurtidas] = useState(0);

  function adicionar() {
    setCurtidas(curtidas + 1);
  }

  function remover() {
    if (curtidas > 0) {
      setCurtidas(curtidas - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 5 — Sistema de Curtidas</Text>
      <Text style={styles.texto}>👍 Curtidas: {curtidas}</Text>
      <View style={styles.botoes}>
        <Button title="Curtir" onPress={adicionar} />
        <Button title="Remover curtida" onPress={remover} disabled={curtidas === 0} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, alignItems: 'center' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  texto: { fontSize: 20, marginVertical: 8 },
  botoes: { flexDirection: 'row', gap: 12 },
});
