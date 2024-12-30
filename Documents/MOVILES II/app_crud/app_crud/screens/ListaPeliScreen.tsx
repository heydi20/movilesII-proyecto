import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
///FIREBASE//
import { db } from '../config/Config'
import { ref, set } from 'firebase/database'

export default function ListaPeliScreen() {
    const [codigo, setcodigo] = useState("")
    const [nombre, setnombre] = useState("")
    const [anio, setanio] = useState(0)
    const [genero, setgenero] = useState("")
    ///ESCRIBIR///
    function guardar() {
  
        set(ref(db, 'peliculas/' + codigo), {
          name: nombre,
          genero: genero,
          age : anio
        });
      }

    return (
        <View>
            <Text>Lista</Text>
            <TextInput
                placeholder='Ingresar codigo'
                style={styles.input}
                onChangeText={(texto)=>setcodigo(texto)}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresar nombre'
                onChangeText={(texto)=>setnombre(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder='Ingresar genero'
                onChangeText={(texto)=>setgenero(texto)}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresar año'
                onChangeText={(texto)=>setanio(+texto)}
                keyboardType='numeric'
            />

            <Button title='GUARDAR' onPress={()=>guardar()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        height: 50,
        width: '85%',
        backgroundColor: 'pink',
        borderRadius: 20,
        paddingHorizontal: 20,
        margin:10
    }

})