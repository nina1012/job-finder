import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Find your job</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <View style={{ marginVertical: 40 }}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    marginVertical: 16,
    marginHorizontal: 12,
  },
  heading: {
    fontSize: 36,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
