import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function LocalCases({ covid }) {
  // Add spaces to numbers
  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.textTitle}>Hrvatska</Text>
      </View>
      <View style={styles.containerCases}>
        <View>
          <Text style={styles.textSubTitle}>Slučajevi</Text>
          <Text style={styles.text}>{formatNumber(covid.casesLocal)}</Text>
        </View>
        <View>
          <Text style={styles.textSubTitle}>Oporavljeni</Text>
          <Text style={styles.text}>{formatNumber(covid.curedLocal)}</Text>
        </View>
        <View>
          <Text style={styles.textSubTitle}>Preminuli</Text>
          <Text style={styles.text}>{formatNumber(covid.deathsLocal)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171C26",
    width: "95%",
    borderRadius: 15,
    paddingVertical: 25,
    marginTop: 20,
  },
  containerCases: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textTitle: {
    color: "#F3F3F4",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textSubTitle: {
    color: "#F3F3F4",
    fontSize: 16,
    paddingBottom: 10,
  },
  text: {
    color: "#F3F3F4",
    fontSize: 18,
    fontWeight: "bold",
  },
});
