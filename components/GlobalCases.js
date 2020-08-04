import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function GlobalCases({ covid }) {
  // Add spaces to numbers
  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.textTitle}>SVIJET</Text>
      </View>
      <View style={styles.containerCases}>
        <View>
          <Text style={styles.textSubTitle}>Potvrđeni slučajevi</Text>
          <Text style={styles.text}>{formatNumber(covid.casesGlobal)}</Text>
        </View>
        <View>
          <Text style={styles.textSubTitle}>Potvrđeni umrli</Text>
          <Text style={styles.text}>{formatNumber(covid.deathsGlobal)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E9E9E9",
    width: "95%",
    borderRadius: 15,
    paddingVertical: 25,
    marginTop: 20,
  },
  containerCases: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textSubTitle: {
    color: "#394359",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    color: "#FF5763",
    fontSize: 18,
    fontWeight: "bold",
  },
});
