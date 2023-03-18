import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListItem from './src/components/ListItem';
import { SAMPLE_DATA } from "./src/assets/Data/SampleData";

export default function App() {
  const ListHeader = () => {
    //Coinlerde aşağı yukarı yaptığında başlık hareket etmediği için
    // içine girip kayboluyordu bazı coinler bu yüzden başlık kısmını ayrı bir fonksiyon şeklinde oluşturup
    // flatlistin içindeki ListHeaderComponent propsu içinde component olarak açarak bir bütün olmasını sağladık
    return (
      <>
        <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Markets</Text>
        </View>
        <View style={styles.divider} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* SafeAreaView kullanmamızın nedeni ekranı yukarı çektiğimde başlık ve coinlerin yukardaki bara girmeleri ve */}
      {/* kaybolmalarını engellemek için */}
      <FlatList
        ListHeaderComponent={<ListHeader />}
        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => {
          return (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={
                item.price_change_percentage_7d_in_currency
              }
              logoUrl={item.image}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
    backgroundColor: "#A9AAA1",
    marginTop: 16,
  },
});
