import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
         placeholder='Email'
        //  value={}
        //  onChangeText={Text =>}
         style={styles.input}
        />
        <TextInput
         placeholder='Password'
        //  value={}
        //  onChangeText={Text =>}
        secureTextEntry
         style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{}}
        style={styles.button}
        >
            <Text style={styles.button}>Login</Text>
        </TouchableOpacity>

        {/* register button */}
        <TouchableOpacity onPress={()=>{}}
        style={[styles.button, styles.buttonOutline]}
        >
            <Text style={[styles.button, styles.buttonOutlineText] }>Register</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',


    }
})