import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Favorite() {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Favorite</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 12,
    marginTop: 8,
  },
});
