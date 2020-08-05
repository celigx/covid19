import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants";
import Today from './components/Today';
import Chart from './components/Chart';
import GlobalCases from "./components/GlobalCases";


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
  const [stats, setStats] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five:'',
    six: '',
    seven: ''
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
          deathsLocal: data[0].UmrliHrvatska - data[1].UmrliHrvatska,
          casesGlobal: data[0].SlucajeviSvijet,
          deathsGlobal: data[0].UmrliSvijet
        })
        setStats({
          one: data[1].IzlijeceniHrvatska - data[2].IzlijeceniHrvatska,
          two: data[2].IzlijeceniHrvatska - data[3].IzlijeceniHrvatska,
          three: data[4].IzlijeceniHrvatska - data[5].IzlijeceniHrvatska,
          four: data[5].IzlijeceniHrvatska - data[6].IzlijeceniHrvatska,
          five: data[6].IzlijeceniHrvatska - data[7].IzlijeceniHrvatska,
          six: data[7].IzlijeceniHrvatska - data[8].IzlijeceniHrvatska,
          seven: data[8].IzlijeceniHrvatska - data[9].IzlijeceniHrvatska,
        });
      });
  };

  return (
    <View style={styles.container}>
      <Today covid={covid} />
      <Chart covid={covid} stats={stats} />
      <GlobalCases covid={covid} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252A48",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
