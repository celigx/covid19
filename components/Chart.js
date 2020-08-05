import React from "react";
import { StyleSheet, View } from "react-native";
import dayjs from "dayjs";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory-native";


export default function Chart({ covid, stats }) {
  const date = {
    one: dayjs(covid.date).subtract(1, "day").format("DD.MM"),
    two: dayjs(covid.date).subtract(2, "day").format("DD.MM"),
    three: dayjs(covid.date).subtract(3, "day").format("DD.MM"),
    four: dayjs(covid.date).subtract(4, "day").format("DD.MM"),
    five: dayjs(covid.date).subtract(5, "day").format("DD.MM"),
    six: dayjs(covid.date).subtract(6, "day").format("DD.MM"),
    seven: dayjs(covid.date).subtract(7, "day").format("DD.MM"),
  };

  const data = [
    { date: date.seven, cases: stats.seven },
    { date: date.six, cases: stats.six },
    { date: date.five, cases: stats.five },
    { date: date.four, cases: stats.four },
    { date: date.three, cases: stats.three },
    { date: date.two, cases: stats.two },
    { date: date.one, cases: stats.one },
  ];

  return (
    <View style={styles.container}>
      <VictoryChart domainPadding={15} height={250}>
        <VictoryAxis
          dependentAxis
          orientation="left"
          style={{
            tickLabels: {
              fontSize: 12,
              fill: "#F3F3F4",
            },
            axis: {
              stroke: "#F3F3F4",
            },
          }}
        />
        <VictoryAxis
          style={{
            tickLabels: {
              fontSize: 12,
              fill: "#F3F3F4",
            },
            axis: {
              stroke: "#F3F3F4",
            },
          }}
        />
        <VictoryBar
          data={data}
          x="date"
          y="cases"
          labelComponent={<VictoryLabel style={{ fill: "#F3F3F4" }} />}
          labels={data.map((label) => label.cases)}
          style={{
            data: {
              fill: "#626FEA",
              color: "#F3F3F4",
            },
            labels: {
              fill: "#F3F3F4",
            },
          }}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171C26",
    borderRadius: 20,
    width: "95%",
    marginTop: 20,
  },
});
