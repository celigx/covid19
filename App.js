import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import Today from './components/Today';


export default function App() {
  const [covid, setCovid] = useState({
    date: '',
    curedLocal: '',
    curedGlobal: '',
    casesLocal: '',
    casesGlobal: '',
    deathsLocal: '',
    deathsGlobal: ''
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(`https://www.koronavirus.hr/json/?action=podaci`)
      .then((response) => response.json())
      .then((data) => {
        setCovid({
          date: data[0].Datum,
          curedLocal: data[0].IzlijeceniHrvatska - data[1].IzlijeceniHrvatska,
          casesLocal: data[0].SlucajeviHrvatska - data[1].SlucajeviHrvatska,
          deathsLocal: data[0].UmrliHrvatska - data[1].UmrliHrvatska
        })
      });
  };

  return (
    <View style={styles.container}>
      <Today covid={covid} />      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
