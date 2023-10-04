import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';


const FormSelectionBtn=({title, style})=>{
    return(
        <TouchableWithoutFeedback>
            <View style={[styles.container, style]}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 45, 
        width: '50%',
        backgroundColor:'#a29bfe', 
       
        justifyContent:'center',
         alignItems:'center'
    },
    title:{
        color:"white",
         fontSize: 20
    }
})

export default FormSelectionBtn;