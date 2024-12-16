import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from './components/Header';
import { fetchData } from './services/api';

const App = () => {
  const [data, setData] = useState<any>(null); // API verisini saklama
  const [loading, setLoading] = useState(false);

  const endpointMap: { [key: string]: string } = {
    Pokemonlar: 'Pokemon',
    Kategoriler: 'Category',
    Ülkeler: 'Country',
    Sahipler: 'Owner',
    Eleştirmenler: 'Reviewer',
  };

  const handleSelect = async (item: string) => {
    const endpoint = endpointMap[item];
    if (!endpoint) return;

    setLoading(true);
    const fetchedData = await fetchData(endpoint);
    setLoading(false);

    setData(fetchedData);
  };

  return (
    <View style={styles.container}>
      <Header onSelect={handleSelect} />
      <ScrollView style={styles.content}>
        {loading ? <Text>Yükleniyor...</Text> : null}
        {data ? (
          <Text>{JSON.stringify(data, null, 2)}</Text>
        ) : (
          <Text>Veri yok.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    marginTop: 20,
    padding: 15,
  },
});

export default App;
