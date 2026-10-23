import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Exercicio1() {
  const [ligada, setLigada] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 1 — Interruptor de Luz</Text>
      <Text style={styles.emoji}>{ligada ? '💡' : '🌑'}</Text>
      <Text style={styles.texto}>{ligada ? 'Luz ligada' : 'Luz desligada'}</Text>
      <Button
        title={ligada ? 'Desligar' : 'Ligar'}
        onPress={() => setLigada(!ligada)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, alignItems: 'center' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  emoji: { fontSize: 40 },
  texto: { fontSize: 18, marginVertical: 8 },
});
