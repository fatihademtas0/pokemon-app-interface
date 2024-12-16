import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';

const Header = ({ onSelect }: { onSelect: (item: string) => void }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const menuItems = ['Pokemonlar', 'Kategoriler', 'Ülkeler', 'Sahipler', 'Eleştirmenler'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemPress = (item: string) => {
    onSelect(item);
    setDropdownVisible(false); // Menü seçimden sonra kapanır
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Pokemon</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownText}>Seçenekler</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Menüyü Modal ile göster */}
      <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setDropdownVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.dropdownMenu}>
              <FlatList
                data={menuItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleItemPress(item)}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#D32F2F', // SafeAreaView için arka plan
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D32F2F',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam arka plan
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '80%',
    padding: 10,
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

export default Header;
