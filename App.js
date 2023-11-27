import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Separator from "./components/Separator";

export default function App() {
  return (
    <>
      <Text>Open up App.js to start working on your app!</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[
            { key: "Android" },
            { key: "iOS" },
            { key: "Java" },
            { key: "Swift" },
            { key: "Php" },
            { key: "Hadoop" },
            { key: "Sap" },
            { key: "Python" },
            { key: "Ajax" },
            { key: "C++" },
            { key: "Ruby" },
            { key: "Rails" },
            { key: ".Net" },
            { key: "Perl" },
          ]}
          renderItem={({ item }) => {
            return <Text>{item.key}</Text>;
          }}
          // ItemSeparatorComponent={Separator}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
