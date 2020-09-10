import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');

    const onChange =  textValue => setText (textValue);

  return (
    <View>
        <TextInput placeholder="Ajouter ..." style={styles.input} 
        onChangeText={onChange} />
        <TouchableOpacity style={styles.btn} onPress={() => 
        addItem(text) } >
            <Text style={styles.btnText} > <Icon name="plus" size={20} /> Ajouter</Text>
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
 input: {
     height: 60,
     paddingTop: 8,
     fontSize: 16,
 },
 btn: {
     backgroundColor: 'blue',
     padding: 9,
     margin: 5,
 },
 btnText: {
     color: 'white',
     fontSize: 20,
     textAlign: 'center',
 },
});


export default AddItem;