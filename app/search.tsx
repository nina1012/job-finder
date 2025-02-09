import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Search as SearchInput } from "../components/search";

export default function Search() {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>Search</Text>
      <SearchInput />
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
