import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, TextInput, Image } from 'react-native';
import React, { useState } from 'react';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default function App() {
  const [items, setItems] = useState([
    { title: 'Item 1', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Item 2', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Item 3', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Item 4', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Item 5', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Item 6', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Item 7', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Item 8', text:'lorem ipsum', imageUrl: 'https://via.placeholder.com/150' },
  ]); // State to store the items

  const [modalVisible, setModalVisible] = useState(false); // State to control the visibility of the modal
  const [newItemText, setNewItemText] = useState(''); // State to store the title input from the modal
  const [newItemTitle, setNewItemTitle] = useState(''); // State to store the title input from the modal

  // Function to add a new item to the list
  const addItem = () => {
    setItems([...items, { title: newItemTitle, text: newItemText, imageUrl: 'https://via.placeholder.com/150' }]);
    setNewItemText('');
    setNewItemTitle('');
    setModalVisible(false);
  };

  return (
    <SafeAreaProvider>
    
      <View style={styles.container}>

        <View><Text>Title</Text></View>

        <ScrollView>
          <View style={styles.itemGrid}>
            {items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image style={styles.itemImage} source={{ uri: item.imageUrl }} />
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text>What happened in your dream?</Text>
            <TextInput
              multiline={true}
              style={styles.modalInput}
              placeholder="I was flying through the cosmos and..."
              value={newItemText}
              onChangeText={text => setNewItemText(text)}
            />
            <Text>Give your dream a title or click + to generate one</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="I was flying through the cosmos and..."
              value={newItemTitle}
              onChangeText={text => setNewItemTitle(text)}
            />
            <TouchableOpacity style={styles.modalButton} onPress={addItem}>
              <Text style={styles.modalButtonText}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    fontSize: 16,
    marginBottom: 20,
    width: '80%',
  },
  modalButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
