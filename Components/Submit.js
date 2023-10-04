import React, {useState} from "react";
import {View, StyleSheet, Dimensions, Text, TextInput, SafeAreaView, TouchableOpacity} from "react-native";
import FormContainer from "./FormContainer";
const Submit=()=>{
    const [name, onName] = useState('');
    const [comment, onComment] = useState('');
    const [url, onUrl] = useState('');
    return (
    <FormContainer>
       <SafeAreaView>
       <TextInput
        style={styles.input}
        onChangeText={newText => onName(newText)}
        value={name}
        placeholder="Name"
       
      />
      
      <TextInput
        style={styles.input}
        onChangeText={newText => onComment(newText)}
        value={comment}
        placeholder="Comment"
       
      />
      
      <TextInput
        style={styles.input}
        onChangeText={newText => onUrl(newText)}
        value={url}
        placeholder="ImageUrl"
       
      />
      
      <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize: 18, color:'black'}}>ADD</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </FormContainer>
    )
}
const styles=StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        width:'300%',
        borderWidth: 1,
        borderRadius:8,
        fontSize: 16,
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: "center"
      },
      btn:{
        backgroundColor: "#a29bfe",
        height: 40,
        margin: 12,
        width:'300%',
        borderWidth: 1,
        borderRadius:8,
        fontSize: 18,
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: "center"
      }
})
export default Submit;