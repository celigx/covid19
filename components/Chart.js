import React from "react";
import { StyleSheet, View } from "react-native";
import dayjs from "dayjs";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory-native";


export default function Chart({ stats }) {
  const date = {
    one: dayjs().subtract(1, "day").format("DD.MM"),
    two: dayjs().subtract(2, "day").format("DD.MM"),
    three: dayjs().subtract(3, "day").format("DD.MM"),
    four: dayjs().subtract(4, "day").format("DD.MM"),
    five: dayjs().subtract(5, "day").format("DD.MM"),
    six: dayjs().subtract(6, "day").format("DD.MM"),
    seven: dayjs().subtract(7, "day").format("DD.MM"),
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
              fill: "#fff",
            },
            axis: {
              stroke: "#fff",
            },
          }}
        />
        <VictoryAxis
          style={{
            tickLabels: {
              fontSize: 12,
              fill: "#fff",
            },
            axis: {
              stroke: "#fff",
            },
          }}
        />
        <VictoryBar
          data={data}
          x="date"
          y="cases"
          labelComponent={<VictoryLabel style={{ fill: "#fff" }} />}
          labels={data.map((label) => label.cases)}
          style={{
            data: {
              fill: "#626FEA",
              color: "#fff",
            },
            labels: {
              fill: "#fff",
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
