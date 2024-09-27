import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import QuoteDisplay from '../components/QuoteDisplay';
import quotesData from '../data/quotesData.json'; // Importa o arquivo JSON

const HomeScreen = () => {
  const [currentQuote, setCurrentQuote] = useState(quotesData[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <QuoteDisplay quote={currentQuote} />
      <Button title="Nova Citação" onPress={getRandomQuote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;
