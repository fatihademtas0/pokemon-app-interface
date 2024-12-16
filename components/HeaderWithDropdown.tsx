import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import API_URL from '../config';

const HeaderWithDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Seçenekler');

  const menuItems = [
    'Pokemonlar',
    'Kategoriler',
    'Ülkeler',
    'Sahipler',
    'Eleştirmenler',
    'Eleştiriler'
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectItem = (item: string) => {
    setSelectedItem(item);
    setDropdownVisible(false);
};


  return (
    <View style={styles.header}>
      <Text style={styles.title}>Pokemon</Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>{selectedItem}</Text>
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdownMenu}>
          <FlatList
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => selectItem(item)}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D32F2F', // Mat kırmızı renk
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dropdownButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dropdownText: {
    color: '#D32F2F',
    fontSize: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    right: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 5, // Android için gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5, // iOS için gölge
    zIndex: 1000, // Diğer öğelerin üstünde görünsün
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  dropdownItemText: {
    color: '#333333',
    fontSize: 16,
  },
});

export default HeaderWithDropdown;
