import { FlatList, StyleSheet, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'

import {  ref, onValue } from "firebase/database";
import { db } from '../config/Config';


export default function PeliculasScreen() {

    const [datos, setdatos] = useState()

    /////// LEER ////
    function leer() {
        
        const starCountRef = ref(db, 'peliculas/'  );
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setdatos(data)
            
            let lista : any = Object.keys(data).map( codigo => ({
                codigo, ...data[codigo],
        }) )

            setdatos(lista);
            
        });
    }

    useEffect(() => {
        
        leer()
        console.log( datos );    

    }, [])
    type Item={
        codigo: String,
        name:String,
        age:number,
        genero:String
    }



    return (
        <View>
            <Text>ListaSree</Text>
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