import React from "react";
import {View, StyleSheet, Dimensions, Text} from "react-native";

const FormContainer =({children})=>{
    return <View style={styles.container}>
        <Text style={{fontSize: 50, fontWeight:'bold'}}>
           {children}
        </Text>

    </View>
}
const styles=StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        width:Dimensions.get("window").width,
        
    }
})
export default FormContainer;