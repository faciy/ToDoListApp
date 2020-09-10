import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import { uuid} from 'uuidv4';
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'View'},
    {id: uuid(), text: 'Text'},
    {id: uuid(), text: 'Flatlist'},
    {id: uuid(), text: 'Input'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
    return prevItems.filter(item => item.id !=id );
    });

  }
  const addItem = (text) => {
  if(!text){
    Alert.alert('Erreur', 'Svp entrez un élément')

  }else{
      setItems (prevItems => {
        return [{id : uuid(), text}, ...prevItems]; 
      });
    }
  };
 
  
 
  return (
    <View style={styles.container} >
      <Header/>
      <AddItem addItem={addItem} /> 
      <FlatList 
      data= {items}
      renderItem= {({item}) => <ListItem item={item} deleteItem={deleteItem} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});


export default App;