import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl, Text } from 'react-native';
import Constants from "expo-constants";
import * as SplashScreen from 'expo-splash-screen';
import Today from './components/Today';
import Chart from './components/Chart';
import GlobalCases from "./components/GlobalCases";
import LocalCases from './components/LocalCases';


export default function App() {
  const [covid, setCovid] = useState({
    date: '',
    curedLocalToday: '',
    casesLocalToday: '',
    deathsLocalToday: '',
    curedGlobal: '',
    casesGlobal: '',
    deathsGlobal: '',
    curedLocal: '',
    casesLocal: '',
    deathsLocal: ''
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
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(`https://www.koronavirus.hr/json/?action=podaci`)
      .then((response) => response.json())
      .then((data) => {
        setCovid({
          date: data[0].Datum,
          curedLocalToday: data[0].IzlijeceniHrvatska - data[1].IzlijeceniHrvatska,
          casesLocalToday: data[0].SlucajeviHrvatska - data[1].SlucajeviHrvatska,
          deathsLocalToday: data[0].UmrliHrvatska - data[1].UmrliHrvatska,
          curedLocal: data[0].IzlijeceniHrvatska,
          casesLocal: data[0].SlucajeviHrvatska,
          deathsLocal: data[0].UmrliHrvatska,
          curedGlobal: data[0].IzlijeceniSvijet,
          casesGlobal: data[0].SlucajeviSvijet,
          deathsGlobal: data[0].UmrliSvijet
        })
        setStats({
          one: data[1].SlucajeviHrvatska - data[2].SlucajeviHrvatska,
          two: data[2].SlucajeviHrvatska - data[3].SlucajeviHrvatska,
          three: data[3].SlucajeviHrvatska - data[4].SlucajeviHrvatska,
          four: data[4].SlucajeviHrvatska - data[5].SlucajeviHrvatska,
          five: data[5].SlucajeviHrvatska - data[6].SlucajeviHrvatska,
          six: data[7].SlucajeviHrvatska - data[8].SlucajeviHrvatska,
          seven: data[8].SlucajeviHrvatska - data[9].SlucajeviHrvatska,
        });
        SplashScreen.hideAsync()
      });
  };

  const onRefresh = () => {
    fetchData();
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Today covid={covid} />
        <Chart covid={covid} stats={stats} />
        <LocalCases covid={covid} />
        <GlobalCases covid={covid} />
        <StatusBar style="light" />
      </View>
    </ScrollView>
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
