import React from "react";
import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";

export default function Today({covid}) {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>Ažurirano: {dayjs(covid.date).format('DD.MM.YYYY HH:mm')}</Text>
      <Text style={styles.todayTitle}>DANAS</Text>
      <View style={styles.todayContainer}>
        <View style={styles.todayCured}>
          <Text style={styles.text}>Izliječeni</Text>
          <Text style={styles.textCured}>{covid.curedLocal}</Text>
        </View>
        <View style={styles.todayNew}>
          <Text style={styles.text}>Novi</Text>
          <Text style={styles.textNewCases}>{covid.casesLocal}</Text>
        </View>
        <View style={styles.todayDeaths}>
          <Text style={styles.text}>Umrli</Text>
          <Text style={styles.textDeaths}>{covid.deathsLocal}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  dateText: {
    color: "#fff",
    marginTop: 10,
    marginBottom: 20,
  },
  todayTitle: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
  },
  todayContainer: {
    backgroundColor: "#4F7EFA",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "85%",
    borderRadius: 15,
    paddingVertical: 30,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: 10,
  },
  todayCured: {
    alignItems: "center",
  },
  todayNew: {
    alignItems: "center",
  },
  todayDeaths: {
    alignItems: "center",
  },
  textCured: {
    color: '#000',
    fontSize: 22,
  },
  textNewCases: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold'
  },
  textDeaths: {
    color: '#000',
    fontSize: 22,
  },
});
