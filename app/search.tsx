import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Search as SearchInput } from "../components/search";
import { theme } from "../theme";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Search</Text>
      <SearchInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingVertical: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 12,
    marginTop: 8,
  },
});
