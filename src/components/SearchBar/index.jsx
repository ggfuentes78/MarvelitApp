import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    Keyboard.dismiss();
    onSearch(searchText);
  };

  const handleCancel = () => {
    setSearchText("");
    onSearch("")
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
      {searchText!="" &&<TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Ionicons name="trash" size={24} color="white" />
      </TouchableOpacity>}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
