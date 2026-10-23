import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Exercicio2() {
  const [emoji, setEmoji] = useState('😐');

  function alternarEmoji() {
    setEmoji(emoji === '😐' ? '😁' : '😐');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 2 — Alterar Emoji</Text>
      <Text style={styles.emoji}>{emoji}</Text>
      <Button title="Alterar emoji" onPress={alternarEmoji} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, alignItems: 'center' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  emoji: { fontSize: 60, marginVertical: 8 },
});
