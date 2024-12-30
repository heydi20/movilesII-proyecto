import { FlatList, StyleSheet, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'

import {  ref, onValue } from "firebase/database";
import { db } from '../config/Config';


export default function ListaScreen() {

    const [datos, setdatos] = useState()

    /////// LEER ////
    function leer() {
        
        const starCountRef = ref(db, 'usuarios/'  );
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setdatos(data) 
            
            let lista : any = Object.keys(data).map( cedula => ({
                cedula, ...data[cedula],
        }) )

            setdatos(lista);
            
        });
    }

    useEffect(() => {
        
        leer()
        console.log( datos );    

    }, [])
    type Item={
        cedula: String,
        name:String,
        edad:number,
        correo:String
    }



    return (
        <View>
            <Text>ListaScreen</Text>
            <FlatList 
                data = {datos}
                renderItem={ ( {item}:{item:Item} )=>
                    <Text>{item.name}</Text>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})