import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


const Chart = ({
    currentPrice,
    logoUrl,
    name,
    priceChangePercentage7d,
    sparkline,
    symbol,
  }) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? "green" : "red";
  
    return (
        <View style={styles.chartWrapper}>
          <View style={styles.titlesWrapper}>
            <View style={styles.upperTitles}>
              <View style={styles.upperLeftTitles}>
                <Image style={styles.image} source={{ uri: logoUrl }} />
                <Text style={styles.subtitle}>
                  {name} ({symbol.toUpperCase()}){" "}
                </Text>
              </View>
              <Text style={styles.subtitle}>7d</Text>
            </View>
            <View style={styles.lowerTitles}>
              <Text style={styles.boldTitle}>
                ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
              </Text>
              <Text style={[styles.title, { color: priceChangeColor }]}>
                {priceChangePercentage7d.toFixed(2)}%
              </Text>
            </View>
          </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    chartWrapper: { marginVertical: 16 },
    titlesWrapper: { marginHorizontal: 16 },
    upperTitles: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    upperLeftTitles: {
      flexDirection: "row",
      alignItems: "center",
    },
    subtitle: {
      fontSize: 14,
      color: "#a9abb1",
    },
    lowerTitles: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    upperLeftTitle: {},
    image: { width: 24, height: 24, marginRight: 4 },
    boldTitle: { fontSize: 24, fontWeight: "bold" },
    title: { fontSize: 18 },
    chartLineWrapper: { marginTop: 40 },
  });
  
  export default Chart;
  